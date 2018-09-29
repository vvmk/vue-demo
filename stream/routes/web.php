<?php

// SPA: routing takes place on the front end, this is basically going to be the API

Route::get('/', function () {
    return view('welcome');
});
