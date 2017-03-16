<?php

namespace App\Http\Controllers;

use App\OfficeLocation;
use Illuminate\Http\Request;

class OfficeLocationsController extends Controller
{
    public function index()
    {
        return response()->json([
            'data' => OfficeLocation::all()
        ]);

    }
}
