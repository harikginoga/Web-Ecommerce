@extends('layouts.admin')

@section('title', 'Create New Product')

@section('content')
    <h2>Create New Product</h2>

    <form action="{{ route('admin.products.store') }}" method="POST">
        @csrf
        <div class="form-group">
            <label for="name">Product Name</label>
            <input type="text" name="name" id="name" class="form-control" value="{{ old('name') }}" required>
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" rows="4" required>{{ old('description') }}</textarea>
        </div>

        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" name="price" id="price" class="form-control" step="0.01" value="{{ old('price') }}" required>
        </div>

        <div class="form-group">
            <label for="image_url">Image URL</label>
            <input type="url" name="image_url" id="image_url" class="form-control" value="{{ old('image_url') }}">
        </div>

        <div class="form-group">
            <label for="stock_quantity">Stock Quantity</label>
            <input type="number" name="stock_quantity" id="stock_quantity" class="form-control" value="{{ old('stock_quantity') }}" required>
        </div>

        <div class="form-actions">
            <button type="submit" class="btn btn-primary">Create Product</button>
            <a href="{{ route('admin.products.index') }}" class="btn">Cancel</a>
        </div>
    </form>
@endsection
