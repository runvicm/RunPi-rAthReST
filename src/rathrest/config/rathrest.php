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
];
