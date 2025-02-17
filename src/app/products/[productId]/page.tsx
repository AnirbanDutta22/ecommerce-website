"use client";
import { useState } from "react";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const ProductPage = () => {
  // Image Gallery
  const images = ["/candle1.jpg", "/candle2.jpg", "/candle3.jpg"];
  const [activeImage, setActiveImage] = useState(images[0]);

  // Tabs
  const [activeTab, setActiveTab] = useState<
    "description" | "productDetails" | "reviews"
  >("description");

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Static rating display (for demonstration)
  // If you want dynamic rating, you can store user ratings and compute an average
  const [rating] = useState(4); // Example: 4 out of 5

  // Reviews
  const [reviews, setReviews] = useState<string[]>([]);
  const [reviewMessage, setReviewMessage] = useState("");

  // Handlers
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmitReview = () => {
    if (reviewMessage.trim()) {
      setReviews((prev) => [...prev, reviewMessage.trim()]);
      setReviewMessage("");
    }
  };

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
              fill
              style={{ objectFit: "contain" }}
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
                  fill
                  style={{ objectFit: "contain" }}
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

          {/* Star Rating Display */}
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, i) =>
              i < rating ? (
                <FaStar key={i} className="text-yellow-500" />
              ) : (
                <FaRegStar key={i} className="text-yellow-500" />
              )
            )}
            <span className="ml-2 text-sm text-gray-600">({rating} / 5)</span>
          </div>

          <p className="text-gray-600">White Camels (May, 2014)</p>

          {/* Quantity & Add to Cart */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-full overflow-hidden">
                <button
                  onClick={handleDecrease}
                  className="px-3 py-2 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={handleIncrease}
                  className="px-3 py-2 hover:bg-gray-200"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
                Add To Cart
              </button>
            </div>

            {/* Wishlist & Compare */}
            <div className="flex gap-3">
              <button className="border border-black py-3 px-6 rounded-full hover:bg-gray-100">
                Add To Wishlist
              </button>
              <button className="border border-black py-3 px-6 rounded-full hover:bg-gray-100">
                Add To Compare
              </button>
            </div>
          </div>

          {/* Policies */}
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
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`text-lg pb-1 ${
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
          <div className="space-y-6">
            {/* Existing Reviews */}
            <div>
              <h3 className="text-lg font-semibold">Customer Reviews</h3>
              {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet</p>
              ) : (
                reviews.map((rev, idx) => (
                  <div key={idx} className="border p-3 my-2 rounded-md">
                    {rev}
                  </div>
                ))
              )}
            </div>

            {/* Write a Review */}
            <div>
              <h3 className="text-lg font-semibold">Write a Review</h3>
              <textarea
                className="w-full border rounded p-2 mt-1"
                rows={4}
                placeholder="Share your thoughts about this product..."
                value={reviewMessage}
                onChange={(e) => setReviewMessage(e.target.value)}
              />
              <button
                onClick={handleSubmitReview}
                className="bg-black text-white py-2 px-4 mt-2 rounded hover:bg-gray-800"
              >
                Submit Review
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
