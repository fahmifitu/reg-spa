<?php

Route::group(['middleware' => 'auth.very_basic'], function() {
    Route::get('/admin/users', 'Admin\UsersController@index')->name('admin.users.index');
});

