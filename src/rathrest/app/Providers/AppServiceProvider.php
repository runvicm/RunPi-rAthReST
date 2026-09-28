<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        RateLimiter::for('register', function (Request $request) {
            return Limit::perMinutes(
                config('rathrest.register_throttle_minutes'),
                config('rathrest.register_throttle_attempts')
            )->by($request->ip());
        });

        RateLimiter::for('login', function (Request $request) {
            return Limit::perMinutes(
                config('rathrest.login_throttle_minutes'),
                config('rathrest.login_throttle_attempts')
            )->by($request->ip());
        });

        RateLimiter::for('account', function (Request $request) {
            return Limit::perMinutes(
                config('rathrest.account_throttle_minutes'),
                config('rathrest.account_throttle_attempts')
            )->by($request->user()?->getAuthIdentifier() ?: $request->ip());
        });
    }
}
