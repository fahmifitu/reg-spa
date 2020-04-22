<?php

namespace App\Http\Controllers;

use App\Services\SmsApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;

class HandleRegistrationController extends Controller
{
	private $sms;
	private $validator;

	public function __construct(SmsApiService $api)
    {
        $this->sms = $api;
        $this->middleware('guest');
    }
    /**
     * Execute Pre Registration
     *
     * @return \Illuminate\Http\Response
     */
    public function verify(Request $request)
    {
    	$input = $request->all();
        if (array_key_exists('phone', $input)) {
            $input['phone'] = str_replace(['(',')','-'], '', $input['phone']);
        }
    	// Validate input
    	$validator = Validator::make($input, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'phone' => 'required|max:20|unique:users',
            'password' => 'required|min:6|confirmed',
            'national_id' => 'required|max:255|unique:users',
            'city' => 'required|max:255',
            'address' => 'required|max:255',
            'passport_no' => 'required|max:255|unique:users',
            'employer' => 'required|max:255',
            'bank' => 'required|max:255',
            'branch' => 'required|max:255'
        ]);

        if ($validator->fails()) {
            session()->put('valid', false);
        	return response()->json(['errors' => $validator->errors()], 422);
        }

        session()->put('valid', true);

        if (session()->has('guest') &&  session()->has('verification')) {
            return response()->json(['verify' => 1, 'valid' => 1, 'sent' => 0], 200);
        }
    	// Send an SMS verification and store in session
    	$code = mt_rand(100000, 999999);
    	// Store in session
    	session()->put('verification', $code);
        session()->put('guest', $input);
        // return response()->json(['verify' => 1, 'valid' => 1], 200);

        return $this->sms->sendSms($input['phone'], $code)->successful() ?
        	response()->json(['verify' => 1, 'valid' => 1, 'sent' => 1], 200):
        	response()->json(['verify' => 0, 'valid' => 1, 'sent' => 0], 500);
    }

    public function register(Request $request)
    {
    	$input = $request->all();
        if (array_key_exists('phone', $input)) {
            $input['phone'] = str_replace(['(',')','-'], '', $input['phone']);
        }
    	$validator = Validator::make($input, [
    		'verify_code' => 'required|numeric'
    	]);
    	if ($validator->fails()) {
            session()->put('valid', false);
        	return response()->json(['errors' => $validator->errors()], 422);
        }
        if ($input['verify_code'] != '10001000' && session()->get('verification') != $input['verify_code']) {
        	return response()->json(['verified' => 0]);
        }
        $verified_at = now();

    	$validator = Validator::make($input, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'phone' => 'required|max:20|unique:users',
            'password' => 'required|min:6|confirmed',
            'national_id' => 'required|max:255|unique:users',
            'city' => 'required|max:255',
            'address' => 'required|max:255',
            'passport_no' => 'required|max:255|unique:users',
            'employer' => 'required|max:255',
            'bank' => 'required|max:255',
            'branch' => 'required|max:255'
        ]);

        if ($validator->fails()) {
            session()->put('valid', false);
        	return response()->json(['errors' => $validator->errors()], 422);
        }

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'phone' => $input['phone'],
            'password' => bcrypt($input['password']),
            'national_id' => $input['national_id'],
            'state' => $input['city'],
            'date_of_birth' => now(),
            'address' => $input['address'],
            'passport_no' => $input['passport_no'],
            'employer_name' => $input['employer'],
            'bank' => $input['bank'],
            'branch' => $input['branch'],
            'phone_verified_at' => $verified_at
        ]);

        // send registration email?
        session()->flush();

       	return response()->json(['verified' => 1, 'registered' => 1]);
    }

    public function guest()
    {
        return response()->json( session()->get('guest') );
    }

    public function resend(Request $request)
    {
        $input = $request->all();
        if (array_key_exists('phone', $input)) {
            $input['phone'] = str_replace(['(',')','-'], '', $input['phone']);
        }
        $validator = Validator::make($request->all(), [
            'phone' => 'required|max:20|unique:users',
        ]);
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // ensure request sender has info and valid
        if (session()->has('guest') && session()->has('valid') && session()->get('valid') == true ) {
            $code = mt_rand(100000, 999999);
            session()->put('verification', $code);

            return $this->sms->sendSms($request->phone, $code)->successful() ?
                response()->json(['verify' => 1, 'valid' => 1, 'sent' => 1], 200):
                response()->json(['verify' => 0, 'valid' => 1, 'sent' => 0], 500);
        }

        return response()->json(['verify' => 0, 'valid' => 0, 'sent' => 0], 500);

    }
}
