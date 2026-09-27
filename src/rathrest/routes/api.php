<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/', function () {
    return response()->json(['message' => 'rAthReST is alive']);
});

// =================
// Public routes (no token needed)
//==================

// Authentication
Route::prefix('/auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

});

// Protected routes (need a valid Sanctum token)
Route::middleware('auth:sanctum')->group(function () {

     Route::prefix('/account')->group(function () {
        Route::get('/', [AccountController::class, 'account']);
        // Route::get('entries', [DevlogController::class, 'index'])->name('entries.index');
        // Route::get('entries/{entry:slug}', [DevlogController::class, 'show'])->name('entries.show');
        // Route::get('tree', [DevlogController::class, 'tree'])->name('entries.tree');
        // Route::post('entries/{entry:slug}', [DevlogController::class, 'addView']);
    });



    Route::post('/logout', [AuthController::class, 'logout']);

    // more protected routes go here later (character list, etc.)

});




// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
