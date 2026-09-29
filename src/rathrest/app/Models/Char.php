<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Char extends Model
{
    protected $table = 'char';
    protected $primaryKey = 'char_id';
    public $timestamps = false;

    public function guild()
    {
        return $this->belongsTo(Guild::class, 'guild_id', 'guild_id');
    }
}
