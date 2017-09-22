<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DataController extends Controller
{
    public function getMovies()
    {
        $movies = file_get_contents('https://api.douban.com/v2/movie/in_theaters?count=8');
        return $movies;
    }

    public function getActivities($start)
    {
        $activities = file_get_contents('https://api.douban.com/v2/event/list?loc=108288&start='.$start.'&count=5');
        print_r($activities);
    }

    public function getFreeMovies()
    {
        $movies = file_get_contents('https://api.douban.com/v2/movie/coming_soon?count=8');
        return $movies;
    }

    public function getTopMovies()
    {
        $movies = file_get_contents('https://api.douban.com/v2/movie/top250?count=8');
        return $movies;
    }

    public function getMovieDetail($id)
    {
        $details = file_get_contents('https://api.douban.com/v2/movie/subject/'.$id);
        return $details;
    }

    public function getActorDetail($id)
    {
        $details = file_get_contents('https://api.douban.com/v2/movie/celebrity/'.$id);
        return $details;
    }
}
