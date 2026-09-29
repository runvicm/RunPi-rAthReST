<?php

namespace App\Models;

use Illuminate\Console\Attributes\Hidden;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

#[Fillable([
    'userid',
    'user_pass',
    'email',
    'group_id',
    'sex',
    'birthdate',
])]
#[Hidden(['user_pass'])]
class Login extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'login';
    protected $primaryKey = 'account_id';
    public $timestamps = false;


    public function chars()
    {
        return $this->hasMany(Char::class, 'account_id', 'account_id');
    }
}
