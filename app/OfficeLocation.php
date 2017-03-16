<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OfficeLocation extends Model
{
    protected $primaryKey = 'unique_id'; // or null
    public $incrementing = false;

    protected $fillable = [
        'id',
        'name',
        'country',
        'countryId',
        'address',
        'lat',
        'lng',
        'street',
        'zip-code',
        'city',
        'phone',
        'fax',
        'email',
        'headquarter',
    ];
}
