<?php

namespace App\Http\Controllers;


use App\Models\Login;
use Dedoc\Scramble\Attributes\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


#[Group('Authentication', weight: 3)]
class AuthController extends Controller
{

    /**
     * Register a new account
     * 
     * @unauthenticated
     * 
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username'  => 'required|string|min:4|max:23|unique:login,userid',
            'password'  => [
                'required',
                'string',
                'min:4',
                'max:31',
                function ($attribute, $value, $fail) use ($request) {
                    $username = (string) $request->input('username');

                    if ($username !== '' && stripos($value, $username) !== false) {
                        $fail('The password must not contain your username.');
                    }
                },
            ],
            'email'     => 'nullable|email|max:39',
            'gender'    => 'required|in:M,F',
            'birthdate' => 'nullable|date_format:Y-m-d',
        ]);
        // Check fields
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors'  => $validator->errors(),
            ], 422);
        }

        // insert to table
        Login::create([
            'userid'    => $request->username,
            'user_pass' => md5($request->password),
            'email'     => $request->email ?? 'a@a.com', // rAthena default fallback
            'sex'       => $request->gender,
            'birthdate' => $request->birthdate,
            'group_id'  => 0, // default = normal player

        ]);

        return response()->json([
            'message' => 'Account created successfully',
        ], 201);
    }


    /**
     * Log-in account
     * 
     * @unauthenticated
     * 
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

    /**
     * Log-out account
     * 
     * Log out accoutn and desttro session
     * 
     */
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
