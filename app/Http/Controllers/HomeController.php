<?php

namespace App\Http\Controllers;

use App\HeaderCategory;
use App\MainMenuCategory;
use App\TechnologiesTab;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
/*    public function __construct()
    {
        $this->middleware('auth');
    }
*/
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $main_menu_categories = MainMenuCategory::all();
        $header_categories = HeaderCategory::all();
        return view('index', compact('header_categories', 'main_menu_categories'));
    }

    public function technologies()
    {
        $main_menu_categories = MainMenuCategory::all();
        $header_categories = HeaderCategory::all();
        $technologies_tabs = TechnologiesTab::all();
        return view('technologies', compact('header_categories', 'main_menu_categories', 'technologies_tabs'));
    }

    public function labeling()
    {
        $main_menu_categories = MainMenuCategory::all();
        $header_categories = HeaderCategory::all();
        return view('labeling', compact('header_categories', 'main_menu_categories'));
    }

    public function pressure_sensitive()
    {
        $main_menu_categories = MainMenuCategory::all();
        $header_categories = HeaderCategory::all();
        return view('pressure_sensitive', compact('header_categories', 'main_menu_categories'));
    }
}
