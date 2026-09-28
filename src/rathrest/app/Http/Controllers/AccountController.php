<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function account(Request $request)
    {

        $login = $request->user();

        return response()->json([
            'userid'   => $login->userid,
            'group_id' => $login->group_id,
        ]);
    }
}
