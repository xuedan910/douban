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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/data',function(){
    return [
        ['name'=>'sfcdv','age'=>20,'email'=>'123@qq.com'],
        ['name'=>'nuyt','age'=>10,'email'=>'345234@qq.com'],
        ['name'=>'mntdrbe','age'=>30,'email'=>'1212423@qq.com'],
        ['name'=>'yutiytyr','age'=>40,'email'=>'11242323@qq.com'],
    ];
});

Route::get('/getMovies','DataController@getMovies');
Route::get('/getFreeMovies','DataController@getFreeMovies');
Route::get('/getTopMovies','DataController@getTopMovies');
Route::get('/getMovieDetail/{id}','DataController@getMovieDetail');
Route::get('/getActorDetail/{id}','DataController@getActorDetail');
Route::get('/searchResults/{type}/{query}','DataController@searchResults');
Route::get('/getActivities/{start}','DataController@getActivities');
