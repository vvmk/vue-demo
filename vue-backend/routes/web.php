<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/', 'ProjectController@create')->name('home');
Route::post('/projects', 'ProjectController@store');

// Remember: returning something directly from this method 
// (something that isn't a view) it is automatically converted
// into a JSON object. Neat!
Route::get('skills', function () {
    return [ 'Laravel', 'Vue', 'PHP', 'JavaScript', 'Trollin\'' ];
});
