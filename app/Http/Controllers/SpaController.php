<?php

namespace App\Http\Controllers;

use App\Employer;

class SpaController extends Controller
{
    /**
     * Get the SPA view.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {
    	$employers = Employer::select(['id', 'name'])->get()->toArray();
        return view('spa')->with('employers', $employers);
    }
}
