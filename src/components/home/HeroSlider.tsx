// components/HeroSlider.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "New Arrivals",
    subtitle: "Handcrafted",
    description: "Otherworldly Scents. Minimalist chic!",
    cta: "Shop Now",
  },
  {
    title: "Special Collection",
    subtitle: "Artisanal",
    description: "Discover our premium range",
    cta: "View Collection",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen bg-gray-50">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 flex">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-xl z-10"
          >
            {"<"}
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-12 rounded-lg shadow-sm mx-auto text-center"
            >
              <p className="text-rose-400 font-script text-2xl mb-4">
                {slides[currentSlide].subtitle}
              </p>
              <h2 className="text-4xl font-bold mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-600 mb-8">
                {slides[currentSlide].description}
              </p>
              <button className="bg-rose-700 text-white px-8 py-3 rounded hover:bg-rose-800 transition-colors">
                {slides[currentSlide].cta}
              </button>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl z-10"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
