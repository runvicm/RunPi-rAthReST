<?php

namespace App\Http\Controllers;


use App\Models\Login;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    /**
     * Register a new account into rAthena's login table.
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username'  => 'required|string|min:4|max:23|unique:login,userid',
            'password'  => 'required|string|min:4|max:31',
            'email'     => 'nullable|email|max:39',
            'gender'    => 'required|in:M,F',
            'birthdate' => 'nullable|date_format:Y-m-d',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $login = Login::create([
            'userid'    => $request->username,
            'user_pass' => md5($request->password),
            'email'     => $request->email ?? 'a@a.com', // rAthena default fallback
            'sex'       => $request->gender,
            'birthdate' => $request->birthdate,
            'group_id'  => 0, // default = normal player

        ]);

        return response()->json([
            'message' => 'Account created successfully',
            'username' => $login->userid,   #return username
        ], 201);
    }


    /**
     * Log in using session/cookie auth (Sanctum SPA mode).
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username'   => 'required|string',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }

        $login = Login::where('userid', $request->username)->first();

        if (! $login || $login->user_pass !== md5($request->password)) {
            return response()->json([
                'message' => 'Invalid credentials',
            ], 401);
        }

        if ($login->state !== 0) {
            return response()->json([
                'message' => 'Account is banned or blocked',
            ], 403);
        }

        // Logs in via session, sets the cookie automatically
        Auth::guard('web')->login($login);

        $request->session()->regenerate();

        return response()->json([
            'message' => 'Login successful',
        ]);
    }


    public function logout(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logged out successfully',
        ]);
    }
}
