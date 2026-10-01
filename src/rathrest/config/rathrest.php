<?php

return [

    /**
     * Control Throlling with fallback deafult
     */
    'login_throttle_attempts' => env('LOGIN_THROTTLE_ATTEMPTS', 5),
    'login_throttle_minutes'  => env('LOGIN_THROTTLE_MINUTES', 1),

    'register_throttle_attempts' => env('REGISTER_THROTTLE_ATTEMPTS', 5),
    'register_throttle_minutes'  => env('REGISTER_THROTTLE_MINUTES', 1),

    'account_throttle_attempts' => env('ACCOUNT_THROTTLE_ATTEMPTS', 30),
    'account_throttle_minutes'  => env('ACCOUNT_THROTTLE_MINUTES', 1),


    'server' => [
        'login' => [
            'host' => env('LOGIN_HOST', '127.0.0.1'),
            'port' => (int) env('LOGIN_PORT', 6900),
        ],
        'char' => [
            'host' => env('CHAR_HOST', '127.0.0.1'),
            'port' => (int) env('CHAR_PORT', 6121),
        ],
        'map' => [
            'host' => env('MAP_HOST', '127.0.0.1'),
            'port' => (int) env('MAP_PORT', 5121),
        ],
    ],
];
