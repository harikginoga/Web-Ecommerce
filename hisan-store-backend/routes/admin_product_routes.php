<?php

use App\Http\Controllers\Admin\AdminProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin Product Routes
|--------------------------------------------------------------------------
|
| These routes are intended to be included in your main web.php file.
| Example: require __DIR__.'/admin_product_routes.php';
|
| They are all prefixed with 'admin' and handle CRUD for products.
|
*/

Route::middleware(['web']) // Assuming web middleware for sessions, csrf, etc.
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::resource('products', AdminProductController::class);
    });
