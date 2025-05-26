<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use Illuminate\Support\Facades\DB; // Included for good measure, though Product::create() is typically used.
use Illuminate\Support\Str; // For URL encoding product names in image URLs

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Clear the table before seeding, if desired (optional)
        // DB::table('products')->truncate(); // Requires DB facade

        $products = [
            [
                'name' => 'Stylish Sneakers',
                'original_name_for_image' => 'SHOES',
                'description' => 'Comfortable and stylish SHOES, perfect for all occasions.',
                'price' => 59.99, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => 'Premium Cotton T-Shirt',
                'original_name_for_image' => 'MEN\'s T-SHIRT',
                'description' => 'High-quality MEN\'s T-SHIRT, made from premium cotton.',
                'price' => 25.50, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => 'Classic Blue Jeans',
                'original_name_for_image' => 'JEANS',
                'description' => 'Durable and fashionable JEANS, available in various sizes.',
                'price' => 79.00, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => 'Elegant Wrist Watch',
                'original_name_for_image' => 'WATCH',
                'description' => 'Elegant WATCH, a perfect blend of style and functionality.',
                'price' => 120.75, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => 'Latest Smart Phone',
                'original_name_for_image' => 'SMART PHONE',
                'description' => 'Latest SMART PHONE with advanced features and a stunning display.',
                'price' => 699.99, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => '4K Ultra HD Television',
                'original_name_for_image' => 'TELEVISION',
                'description' => 'Immersive TELEVISION experience with vibrant colors and sharp details.',
                'price' => 499.50, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
            [
                'name' => 'Comfortable Hoodie',
                'original_name_for_image' => 'HOODIES',
                'description' => 'Comfortable and warm HOODIES, perfect for chilly days.',
                'price' => 45.00, // Updated price
                'stock_quantity' => rand(10, 100),
            ],
        ];

        foreach ($products as $productData) {
            $imageName = Str::slug($productData['original_name_for_image'], '+'); // Create URL-friendly name
            Product::create([
                'name' => $productData['name'],
                'description' => $productData['description'],
                'price' => $productData['price'],
                'image_url' => 'https://via.placeholder.com/200x200.png?text=' . $imageName,
                'stock_quantity' => $productData['stock_quantity'],
            ]);
        }
    }
}
