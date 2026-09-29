<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
    protected $table = 'guild';
    protected $primaryKey = 'guild_id';
    public $timestamps = false; // rAthena tables usually don't use Laravel timestamps

    // If you want to see which characters belong to this guild
    public function chars()
    {
        return $this->hasMany(Char::class, 'guild_id', 'guild_id');
    }
}
