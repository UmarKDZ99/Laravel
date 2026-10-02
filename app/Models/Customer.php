<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'date_of_birth',
        'address',
        'city',
        'state',
        'postal_code',
        'country',
        'notes',
    ];
}
