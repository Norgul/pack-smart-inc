<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HeaderCategory extends Model
{
    protected $fillable = [
        'name', 'parent_id', 'url_slug'
    ];
}
