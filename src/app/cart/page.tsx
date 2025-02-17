// pages/cart.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  size?: string;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "White Barn Bath & Body Works 3 Wick",
      price: 11.9,
      quantity: 2,
      image: "/images/candle-wick.jpg",
    },
    {
      id: 2,
      name: "Hummingbird printed sweater",
      price: 28.72,
      originalPrice: 35.9,
      quantity: 2,
      image: "/images/sweater.jpg",
      size: "S",
    },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 7.0;
    const taxes = 0.0;
    return subtotal + shipping + taxes;
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-semibold mb-6">SHOPPING CART</h1>

      <div className="lg:flex lg:gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3 mb-8 lg:mb-0">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="mb-4">Your cart is empty</p>
              <Link
                href="/shop"
                className="inline-block bg-gray-800 text-white px-6 py-2 rounded"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="border border-gray-200 rounded">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-start md:items-center p-4 border-b border-gray-200 last:border-b-0"
                >
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-20 h-20 relative mr-4">
                      <Image
                        src={item.image}
                        alt={item.name}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      {item.originalPrice && (
                        <div className="text-sm">
                          <span className="line-through text-gray-500">
                            ${item.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-red-500 ml-2">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      )}
                      {!item.originalPrice && (
                        <div className="text-sm">
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      )}
                      {item.size && (
                        <div className="text-sm mt-1">Size: {item.size}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto md:ml-auto md:space-x-8">
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(item.id, parseInt(e.target.value) || 1)
                        }
                        className="w-10 text-center outline-none"
                      />
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 text-gray-500 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <div className="font-medium text-right md:w-24">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500"
                      aria-label="Remove item"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-6">
            <Link
              href="/shop"
              className="flex items-center text-gray-600 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Continue shopping
            </Link>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="border border-gray-200 rounded p-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                  Items
                </span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>$7.00</span>
              </div>

              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span>Total (tax excl.)</span>
                  <span>${(calculateSubtotal() + 7.0).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between">
                <span>Total (tax incl.)</span>
                <span>${(calculateSubtotal() + 7.0).toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Taxes:</span>
                <span>$0.00</span>
              </div>
            </div>

            <button className="w-full bg-red-700 text-white py-3 rounded mt-6 hover:bg-red-800 transition">
              Proceed to checkout
            </button>

            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="w-8 mt-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Security policy</p>
                  <p className="text-sm text-gray-600">
                    (edit with the Customer Reassurance module)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 mt-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Delivery policy</p>
                  <p className="text-sm text-gray-600">
                    (edit with the Customer Reassurance module)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 mt-1 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Return policy</p>
                  <p className="text-sm text-gray-600">
                    (edit with the Customer Reassurance module)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
