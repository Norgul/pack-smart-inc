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


Route::get('test', function(){
    return view('test');
});


Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');
Route::get('/office-locations', 'OfficeLocationsController@index');
Route::get('/technologies', 'HomeController@technologies');
Route::get('/labeling', 'HomeController@labeling');
/*
 * Header routes
 */
Route::get('/active-intelligent', 'HomeController@index');
Route::get('/card-financial', 'HomeController@index');
Route::get('/healthcare-life', 'HomeController@index');
Route::get('/premium-branded', 'HomeController@index');
Route::get('/specialty-printing', 'HomeController@index');
Route::get('/technical-services', 'HomeController@index');

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
Hamburger menu routes
*/
Route::get('/about/innovations', function () {
    return "This will one day be innovations page";
});


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
