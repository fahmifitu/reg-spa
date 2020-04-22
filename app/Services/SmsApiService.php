<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SmsApiService
{
	private $host;
	private $port;
	private $username;
	private $password;
	private $url;
	private $http;

    public function __construct()
    {
        $this->setApiProperties();
        $this->setHttpProperties();
    }

    public function sendSms(String $phone, $verification)
    {
        $SMSCRoute = $phone[1] == '1' ? 'Almadar': 'Libyana';
    	return $this->post([
    		'PhoneNumber' => '+218' . $phone,
    		'Text' => 'رمز التفعيل: ' . $verification,
    		'SMSCRoute' => $SMSCRoute,
    		'Sender' => 15500
    	]);
    }

    private function setApiProperties()
    {
    	$this->host = config('sms.host');
    	$this->port = config('sms.port');
    	$this->username = config('sms.username');
    	$this->password = config('sms.password');
    	$this->url = $this->host.':'.$this->port;
    }

    private function setHttpProperties()
    {
    	$this->http = Http::withBasicAuth(
    		$this->username,
    		$this->password
    	);
    }

    private function post(Array $parameters)
    {
    	return $this->http->asForm()->post($this->url, $parameters);
    }
}
