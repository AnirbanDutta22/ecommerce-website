// components/home/StorySection.tsx
"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const StorySection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Video Section */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/images/candle-video-poster.jpg"
          >
            <source src="/videos/candle-making.mp4" type="video/mp4" />
          </video>

          <button
            onClick={toggleVideo}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-16 h-16 bg-[#B87159] bg-opacity-80 rounded-full flex items-center justify-center
                     hover:bg-opacity-100 transition-all duration-300"
          >
            {isPlaying ? (
              <span className="sr-only">Pause</span>
            ) : (
              <span className="sr-only">Play</span>
            )}
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {isPlaying ? (
                <path fillRule="evenodd" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              ) : (
                <path d="M8 5v14l11-7z" />
              )}
            </svg>
          </button>
        </div>

        {/* Story Content */}
        <div>
          <div className="mb-6">
            <h2 className="font-script text-[#B87159] text-3xl md:text-4xl mb-4">
              About us
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              The Olars Candle Story
            </h3>
            <p className="text-gray-600 mb-6">
              We like to think of our wares as full sensory experiences!
            </p>
            <p className="text-gray-500">
              Porttitor massa id neque aliquam, diam volutpat commodo sed
              egestas egestas fringilla phasellus faucibus. Consectetur a erat
              nam dui id cuso ornare arcu odio ut sem.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative aspect-square">
              <Image
                src="/images/candle-making.jpg"
                alt="Candle making process"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-2">Handcrafted by</h4>
              <p className="text-lg text-[#0A5F59]">a team of artisans.</p>
            </div>
            <div className="relative aspect-square md:order-last">
              <Image
                src="/images/candle-display.jpg"
                alt="Candle display"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-2">Carefully Selected</h4>
              <p className="text-lg text-[#0A5F59]">premium ingredients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
