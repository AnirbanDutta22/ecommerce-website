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
    <div className="relative w-full h-screen bg-[url('/landing_bg.jpg')] bg-cover bg-center bg-no-repeat z-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 flex">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          >
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_92_"
                  d="M111.213,165.004L250.607,25.607c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0.001 l-150,150.004C76.58,157.211,75,161.026,75,165.004c0,3.979,1.581,7.794,4.394,10.607l150,149.996 C232.322,328.536,236.161,330,240,330s7.678-1.464,10.607-4.394c5.858-5.858,5.858-15.355,0-21.213L111.213,165.004z"
                ></path>{" "}
              </g>
            </svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/70 p-16 md:p-20 rounded-lg shadow-2xl mx-auto text-center"
            >
              <p className="text-primary font-cursive text-3xl md:text-5xl mb-4">
                {slides[currentSlide].subtitle}
              </p>
              <h2 className="text-5xl md:text-7xl text-black mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-gray-600 mb-8">
                {slides[currentSlide].description}
              </p>
              <button className="bg-primary text-white px-5 py-1.5 md:px-8 md:py-3 hover:bg-zinc-900 transition-colors flex items-center gap-x-3 justify-self-center">
                {slides[currentSlide].cta}{" "}
                <svg
                  fill="#ffffff"
                  height="10px"
                  width="10px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 330 330"
                  xmlSpace="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      id="XMLID_7_"
                      d="M288.107,116.894c-5.858-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L278.787,150H15 c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h263.787l-11.894,11.893c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394l37.5-37.5c5.858-5.858,5.858-15.355,0-21.213 L288.107,116.894z"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-xl z-10"
          >
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  id="XMLID_92_"
                  d="M218.787,165.004L79.393,25.607c-5.858-5.858-5.858-15.355,0-21.213c5.858-5.858,15.355-5.858,21.213,0.001 l150,150.004C253.42,157.211,255,161.026,255,165.004c0,3.979-1.581,7.794-4.394,10.607l-150,149.996 C97.678,328.536,93.839,330,90,330s-7.678-1.464-10.607-4.394c-5.858-5.858-5.858-15.355,0-21.213L218.787,165.004z"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
