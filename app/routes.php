<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	$p = [
		'main.css' 	=> public_path().'/css/main.css',
		'main.js' 	=> public_path().'/js/main.js',
	];

	$data = [
		'version' 	=> [
			'main.css' 	=> (file_exists($p['main.css'])) ? filemtime($p['main.css']) : null,
			'main.js' 	=> (file_exists($p['main.js'])) ? filemtime($p['main.js']) : null,
		],
		'path'		=> $p,
	];

	return View::make('load', $data);
});