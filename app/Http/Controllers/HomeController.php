<?php

namespace App\Http\Controllers;

use App\HeaderCategory;
use App\MainMenuCategory;
use App\TechnologiesTab;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('index', compact('header_categories', 'main_menu_categories'));
    }

    public function technologies()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        $technologies_tabs = TechnologiesTab::all();
        return view('technologies', compact('header_categories', 'main_menu_categories', 'technologies_tabs'));
    }

    public function labeling()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('labeling', compact('header_categories', 'main_menu_categories'));
    }

    public function pressure_sensitive()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('pressure_sensitive', compact('header_categories', 'main_menu_categories'));
    }

    public function about()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('about', compact('header_categories', 'main_menu_categories'));
    }

    public function contact()
    {
        return redirect('support');
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('contact', compact('header_categories', 'main_menu_categories'));
    }

    public function market_segments()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('market_segments', compact('header_categories', 'main_menu_categories'));
    }

    public function solutions()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('solutions', compact('header_categories', 'main_menu_categories'));
    }

    public function support()
    {
        list($main_menu_categories, $header_categories) = $this->menuImports();
        return view('support', compact('header_categories', 'main_menu_categories'));
    }

    /**
     * @return array
     */
    public function menuImports()
    {
        $main_menu_categories = MainMenuCategory::all();
        $header_categories = HeaderCategory::all();
        return array($main_menu_categories, $header_categories);
    }
}
