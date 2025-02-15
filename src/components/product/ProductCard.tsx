// components/ProductCard.tsx
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProductProps {
  title: string;
  price: number;
  originalPrice?: number;
  images: {
    primary: string;
    hover: string;
  };
  isNew?: boolean;
}

const ProductCard = ({
  title,
  price,
  originalPrice,
  images,
  isNew,
}: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={isHovered ? images.hover : images.primary}
          alt={title}
          fill
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />

        {isNew && (
          <span className="absolute top-4 left-4 bg-[#6BA5B4] text-white px-3 py-1 text-sm rounded-md z-10">
            New
          </span>
        )}
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
          <motion.span
            className="text-gray-900 font-semibold"
            animate={{ opacity: isHovered ? 0 : 1 }}
          >
            ${price.toFixed(2)}
          </motion.span>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="w-full bg-[#B87159] text-white py-2 rounded-md hover:bg-[#a65f47] 
            transition-colors text-sm sm:text-base"
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
