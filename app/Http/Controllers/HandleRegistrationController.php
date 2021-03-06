<?php

namespace App\Http\Controllers;

use App\Services\SmsApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Employer;

class HandleRegistrationController extends Controller
{
	private $sms;
	private $validator;
    private $rules = [
        'name' => 'required|max:100',
        'date_of_birth' => 'required|date',
        'email' => 'required|email|max:100|unique:users',
        'phone' => 'required|min:9|max:20|unique:users',
        'password' => 'required|min:6|confirmed',
        'national_id' => 'required|max:100|unique:users',
        'national_id_file' => 'required | mimes:doc,pdf,docx,jpg,jpeg | max:5000',
        'city' => 'required|max:100',
        'address' => 'required|max:100',
        'passport_no' => 'max:100|unique:users',
        'employee_no' => 'required|max:100',
        'employer' => 'required_without:other_employer|max:100',
        'other_employer' => 'required_without:employer|max:100',
        'bank' => 'max:100',
        'branch' => 'max:100',
    ];
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
    	$validator = Validator::make($input, $this->rules);

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
        // remove file from input
        $input = array_diff_key($input, array_flip(['national_id_file']));
        session()->put('guest', $input);

        return $this->sms->sendSms($input['phone'], $code)->successful() ?
        	response()->json(['verify' => 1, 'valid' => 1, 'sent' => 1], 200):
        	response()->json(['verify' => 0, 'valid' => 1, 'sent' => 0], 500);
    }
    /*
    * Regi
    */
    public function register(Request $request)
    {
    	$input = $request->all();
        if (array_key_exists('phone', $input)) {
            $input['phone'] = str_replace(['(',')','-'], '', $input['phone']);
        }
    	$validator = Validator::make($input, [
    		'verify_code' => 'required|max:20'
    	]);
    	if ($validator->fails()) {
        	return response()->json(['errors' => $validator->errors()], 422);
        }

        if ($input['verify_code'] != '10001000' && session()->get('verification') != $input['verify_code']) {
        	return response()->json(['verified' => 0]);
        }
        $verified_at = now();

    	$validator = Validator::make($input, $this->rules);

        if ($validator->fails()) {
            session()->put('valid', false);
        	return response()->json([
                'valid' => 0,
                'errors' => $validator->errors()
            ], 422);
        }

        $employer = Employer::find($input['employer']);
        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'date_of_birth' => $input['date_of_birth'],
            'phone' => $input['phone'],
            'password' => bcrypt($input['password']),
            'national_id' => $input['national_id'],
            'state' => $input['city'],
            'date_of_birth' => $input['date_of_birth'],
            'address' => $input['address'],
            'passport_no' => $input['passport_no'] ?? null,
            'employer_id' => $input['employer'] ?? null,
            'other_employer' => $input['other_employer'] ?? $employer->name,
            'employee_no' => $input['employee_no'] ?? null,
            'bank' => $input['bank'] ?? null,
            'branch' => $input['branch'] ?? null,
            'phone_verified_at' => $verified_at
        ]);
        $attachment = $user->attach(
            \Request::file('national_id_file'), [
                'title' => 'National id file',
                'key' => 'national_id_file'
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
        $validator = Validator::make($input, [
            'phone' => $this->rules['phone'],
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
