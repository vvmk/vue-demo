<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public function user() {
        // must be explicit about the id in this situation!!
        return $this->belongsTo(User::class)
            ->select(['id', 'name']);
    }
}
