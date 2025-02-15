// components/Footer.tsx
"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FFF5F5] pt-16 pb-8 relative">
      {/* Top Navigation */}
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <nav className="flex justify-center space-x-8">
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/locations" className="text-gray-700 hover:text-gray-900">
            Store Location
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/delivery" className="text-gray-700 hover:text-gray-900">
            Delivery
          </Link>
          <Link href="/policy" className="text-gray-700 hover:text-gray-900">
            Policy
          </Link>
          <Link href="/faqs" className="text-gray-700 hover:text-gray-900">
            FAQs
          </Link>
        </nav>
      </div>

      {/* Subscription Section */}
      <div className="max-w-lg mx-auto text-center mb-16">
        <div className="mb-4">
          <svg
            className="w-8 h-8 mx-auto"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-2">Subcribe</h2>
        <p className="text-gray-600 mb-6">
          Get on the list and get 10% off your first order!
        </p>

        <div className="flex space-x-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
          />
          <button className="px-6 py-2 bg-[#B87159] text-white rounded-md hover:bg-[#a65f47] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-600 text-sm">
        <p>
          Copyright © 2021 Olars. All Rights Reserved |
          <a href="tel:+01123567099" className="mx-2 hover:text-gray-900">
            (+01) 123 567 99
          </a>{" "}
          |
          <a href="mailto:demo@demo.com" className="ml-2 hover:text-gray-900">
            demo@demo.com
          </a>
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 bottom-0 opacity-10">
        <img src="/left-footer-decor.png" alt="" className="w-48" />
      </div>
      <div className="absolute right-0 bottom-0 opacity-10">
        <img src="/right-footer-decor.png" alt="" className="w-48" />
      </div>
    </footer>
  );
};

export default Footer;
