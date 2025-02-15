// import Image from "next/image";
"use client";
import { FC } from "react";
import ProductCard from "../product/ProductCard";

interface ProductImage {
  primary: string;
  hover: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  images: ProductImage;
  isNew?: boolean;
}

const CandleShowcase: FC = () => {
  const products: Product[] = [
    {
      id: "1",
      title: "Chesapeake Bay Candle",
      price: 19.12,
      originalPrice: 29.99,
      images: {
        primary: "/images/candle1.jpg",
        hover: "/images/candle1-hover.jpg",
      },
      isNew: true,
    },
    {
      id: "2",
      title: "Village Candle Cinnamon",
      price: 29.0,
      images: {
        primary: "/images/candle1.jpg",
        hover: "/images/candle1-hover.jpg",
      },
      isNew: true,
    },
    // Add more products as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-script text-amber-700">Best for you</h2>
        <h1 className="text-4xl font-semibold mt-4">
          New Collection Best Seller
        </h1>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            originalPrice={product.originalPrice}
            images={product.images}
            isNew={product.isNew}
          />
        ))}
      </div>
    </div>
  );
};

export default CandleShowcase;
