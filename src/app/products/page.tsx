// pages/products.tsx
"use client";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilter";
import { useState } from "react";

const sortOptions = [
  { label: "Relevance", value: "relevance" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Newest", value: "newest" },
];

const ProductListing = () => {
  const [sortBy, setSortBy] = useState("relevance");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleFilterChange = (filters) => {
    // Implement filter logic
    console.log("Applied filters:", filters);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold">HOME</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "text-[#B87159]" : "text-gray-400"
            }`}
          >
            {/* Grid icon */}
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "text-[#B87159]" : "text-gray-400"
            }`}
          >
            {/* List icon */}
          </button>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-gray-300 rounded-md focus:ring-[#B87159] focus:border-[#B87159]"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="w-64 flex-shrink-0">
          <ProductFilters onFilterChange={handleFilterChange} />
        </div>

        <div
          className={`flex-1 grid ${
            viewMode === "grid" ? "grid-cols-3" : "grid-cols-1"
          } gap-6`}
        >
          {/* Example product cards */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <ProductCard
              key={index}
              title="Chesapeake Bay Candle"
              price={19.12}
              originalPrice={23.9}
              images={["/candle1.jpg", "/candle2.jpg", "/candle3.jpg"]}
              isNew={true}
            />
          ))}
          {/* Add more ProductCard components */}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
