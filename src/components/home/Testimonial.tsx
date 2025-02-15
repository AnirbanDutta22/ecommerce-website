// components/TestimonialSection.tsx
"use client";

import { useState, useEffect } from "react";

export const TestimonialSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      text: `"The scent is refreshing and sweet, but not too overwhelming, and it reminds me of strolling on the beaches of Hawaii, i.e. heaven. I also love the cute, millennial-pink color..."`,
      author: "Craig Jenkins",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16 tracking-tight">
          All That Kind Words
        </h1>

        <div className="relative overflow-hidden h-96">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-1000 ${
                activeSlide === index ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <blockquote className="text-center max-w-2xl mx-auto">
                <p className="text-lg italic text-gray-600 mb-8 leading-relaxed">
                  {testimonial.text}
                </p>
                <footer className="text-lg font-semibold not-italic">
                  {testimonial.author}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>

        <hr className="my-12 border-t-2 border-gray-200 w-24 mx-auto" />

        <div className="text-center space-y-6 mb-12">
          <h2 className="text-2xl font-semibold tracking-wide">
            The Self Discovery Collection
          </h2>
          <div className="space-y-2">
            <p className="text-gray-600">100% Organic Natural Wax.</p>
            <p className="text-gray-600">Pure Essential Oils.</p>
            <p className="text-gray-600">Hand poured in</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-[#FF6B6B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#E55A5A] transition-colors duration-300 shadow-lg"
          >
            Discovery Now →
          </a>
        </div>
      </div>
    </section>
  );
};
