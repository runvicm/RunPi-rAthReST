<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return response()->json(['message' => 'rAthReST is alive']);
});

// =================================
// Public routes (no token needed)
//==================================

// Authentication
Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
    Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:register');
});

// Protected routes (need a valid Sanctum token)
Route::middleware('auth:sanctum')->group(function () {

    Route::prefix('/account')->group(function () {
        Route::get('/', [AccountController::class, 'account'])->middleware('throttle:accont');
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});
