<?php

namespace App\Http\Controllers;

use Dedoc\Scramble\Attributes\Group;
use Illuminate\Http\Request;

#[Group('rAthReST', weight: 1)]
class IndexController extends Controller
{

    /**
     * API info
     *
     * Returns basic information about the API.
     *
     * @unauthenticated
     */
    public function index()
    {
        return response()->json([
            'name' => "rAthena Request-Response Service Tool",
            'alias' => "rAthReST",
            'message' => 'rAthReST is alive',
            'version' => '1.0.0',
        ]);
    }
}
