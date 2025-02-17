// components/ProductCard.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineHeart, HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";

interface ProductProps {
  title: string;
  price: number;
  originalPrice?: number;
  images: string[]; // Array of image URLs
  isNew?: boolean;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  images = [], // Default to empty array if undefined
  isNew,
}: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image transitions on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isHovered && images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1500); // Change image every 2 seconds
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, images.length]);

  // If no images are provided, return null or a placeholder
  if (images.length === 0) {
    return null; // Or render a placeholder image
  }

  return (
    <Link href="/products/1">
      <motion.div
        className="group relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setCurrentImageIndex(0); // Reset to first image on mouse leave
        }}
      >
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex]}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>

          {isNew && (
            <span className="absolute top-4 left-4 bg-[#6BA5B4] text-white px-3 py-1 text-sm rounded-md z-10">
              New
            </span>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 right-0 flex flex-col items-center justify-center gap-2 px-4 z-10"
          >
            <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-md hover:bg-white hover:text-primary transition-all shadow-md flex items-center justify-center gap-1 text-sm">
              <HiOutlineHeart className="text-lg" />
            </button>
            <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 p-2 rounded-md hover:bg-white hover:text-primary transition-all shadow-md flex items-center justify-center gap-1 text-sm">
              <HiOutlineShoppingBag className="text-lg" />
            </button>
          </motion.div>
        </div>

        <div className="mt-4 space-y-2">
          <h3 className="text-gray-800 font-medium text-sm sm:text-base">
            {title}
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-gray-900 font-semibold">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
