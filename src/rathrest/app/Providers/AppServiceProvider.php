<?php

namespace App\Providers;

use Dedoc\Scramble\Scramble;
use Dedoc\Scramble\Support\Generator\OpenApi;
use Dedoc\Scramble\Support\Generator\SecurityScheme;
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


        Scramble::afterOpenApiGenerated(function (OpenApi $openApi) {
            $openApi->secure(
                SecurityScheme::apiKey('cookie', config('session.cookie'))
                    ->setDescription('Log in through `POST /auth/login`. The server sets this cookie automatically, so you don\'t need to copy it by hand.')
            );
        });
    }
}
