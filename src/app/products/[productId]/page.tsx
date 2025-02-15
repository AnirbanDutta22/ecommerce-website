"use client";
import { useState } from "react";
import Image from "next/image";

const ProductPage = () => {
  const [activeImage, setActiveImage] = useState("/images/product-main.jpg");
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "/images/product-1.jpg",
    "/images/product-2.jpg",
    "/images/product-3.jpg",
  ];

  return (
    <div className="w-full sm:w-[85%] md:w-[70%] mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          <div className="relative h-96 bg-gray-100 rounded-lg">
            <Image
              src={activeImage}
              alt="White Barn Bath & Body Works 3 Wick"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="flex gap-4">
            {images.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className={`relative h-24 w-24 rounded-lg border-2 ${
                  activeImage === img ? "border-black" : "border-transparent"
                }`}
              >
                <Image
                  src={img}
                  alt="Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">
            White Barn Bath & Body Works 3 Wick
          </h1>
          <p className="text-2xl">$11.90</p>
          <p className="text-gray-600">White Camels (May, 2014)</p>

          <div className="flex flex-col gap-3">
            <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
              Add To Cart
            </button>
            <button className="border border-black py-3 px-6 rounded-full hover:bg-gray-100">
              Add To Wishlist
            </button>
            <button className="border border-black py-3 px-6 rounded-full hover:bg-gray-100">
              Add To Compare
            </button>
          </div>

          <div className="space-y-4 pt-4">
            <div className="border-t pt-4">
              <p className="font-semibold">Sexually policy</p>
              <p className="text-sm text-gray-600">
                (self with the Customer Reassurance module)
              </p>
            </div>
            <div className="border-t pt-4">
              <p className="font-semibold">Delivery policy</p>
              <p className="text-sm text-gray-600">
                (self with the Customer Reassurance module)
              </p>
            </div>
            <div className="border-t pt-4">
              <p className="font-semibold">Retain policy</p>
              <p className="text-sm text-gray-600">
                (self with the Customer Reassurance module)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="border-t pt-8">
        <div className="flex gap-8 mb-8">
          {["description", "productDetails", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-lg ${
                activeTab === tab
                  ? "border-b-2 border-black font-bold"
                  : "text-gray-500"
              }`}
            >
              {tab
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
            </button>
          ))}
        </div>

        {activeTab === "description" && (
          <p>
            The best part of email that the day off right with a positive
            thought is $2.5m clearance / $6.5m height / 0.47kg. Delivered as
            well.
          </p>
        )}

        {activeTab === "productDetails" && (
          <div className="space-y-4">
            <p>
              <strong>Dimensions:</strong> 2.5m clearance / 6.5m height
            </p>
            <p>
              <strong>Weight:</strong> 0.47kg
            </p>
            <p>
              <strong>Delivery:</strong> Standard delivery included
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <p>No reviews yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
