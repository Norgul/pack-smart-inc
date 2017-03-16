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

Auth::routes();


Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/office-locations', 'OfficeLocationsController@index');
/*
 * Header routes
 */
Route::get('/active-intelligent', 'HomeController@index');

Route::get('/card-financial', function () {
    return view('index');
});
Route::get('/healthcare-life', function () {
    return view('index');
});
Route::get('/premium-branded', function () {
    return view('index');
});
Route::get('/specialty-printing', function () {
    return view('index');
});
Route::get('/technical-services', function () {
    return view('index');
});

Route::get('/why-pack-smart', function () {
    return view('index');
});

Route::get('/search', function () {
    return view('index');
});

Route::get('/careers', function () {
    return view('index');
});
// END of header routes


/*
 * Footer routes
 */
Route::get('/privacy-policy', function () {
    return view('index');
});
Route::get('/terms-and-conditions', function () {
    return view('index');
});
Route::get('/sitemap', function () {
    return view('index');
});

// END of footer routes
