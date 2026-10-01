<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\ServerStatController;
use Illuminate\Support\Facades\Route;



// =================================
// Public routes (no need session)
//==================================

Route::get('/', [IndexController::class, 'index']);

Route::prefix('/server')->group(function () {
    Route::get('status', [ServerStatController::class, 'status']);
    Route::get('stats', [ServerStatController::class, 'stats']);
});

// ===> Authentication
Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login'])->middleware('throttle:login');
    Route::post('/register', [AuthController::class, 'register'])->middleware('throttle:register');
});


// =================================
// Authenticated routes
//==================================


// ===> Protected routes (need a valid Sanctum token)
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    // Account related routes
    Route::prefix('/account')->group(function () {
        Route::get('/', [AccountController::class, 'account'])->middleware('throttle:account');
        Route::get('/view', [AccountController::class, 'view']);
        Route::get('/characters', [AccountController::class, 'characters']);
    });
});
