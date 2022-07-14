<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TVGuideController extends Controller
{
    public function index()
    {
      return Inertia::render('TVGuide/Index');
    }
}
