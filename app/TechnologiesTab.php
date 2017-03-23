<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TechnologiesTab extends Model
{
    protected $fillable =[
        'name', 'url_slug',
    ];
}
