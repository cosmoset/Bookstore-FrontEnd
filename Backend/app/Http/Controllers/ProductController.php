<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
class ProductController extends Controller
{
    //
    function addProduct(Request $req){
       // return $req->file('file')->store('products');
       $product = new Product;
       $product->title = $req->input('title');
       $product->description = $req->input('description');
       $product->image = $req->input('image');
       $product->price = $req->input('price');
       $product->Category = $req->input('Category');
       $product->save();
       
       return $product;
    }

    public function getProducts()
    {
        $products = Product::all();

        return response()->json($products);
    }

    public function getProduct($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
}
