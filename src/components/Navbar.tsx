// components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineHeart,
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";

interface NavItem {
  title: string;
  path: string;
  submenu?: { title: string; path: string }[];
}

const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
    submenu: [
      { title: "Featured", path: "/featured" },
      { title: "New Arrivals", path: "/new-arrivals" },
    ],
  },
  {
    title: "Shop",
    path: "/products",
    submenu: [
      { title: "All Products", path: "/products" },
      { title: "Categories", path: "/categories" },
    ],
  },
  { title: "Pages", path: "/pages" },
  { title: "Blogs", path: "/blogs" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm">
      <div className="w-full bg-primary flex justify-center items-center text-white text-xs p-2.5">
        FREE SHIPPING* on orders of $50 or more.{" "}
        <Link href="/" className="underline mr-1">
          Carrier surcharge
        </Link>
        may apply.
      </div>
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold">OLARS</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.title)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  href={item.path}
                  className="text-gray-700 hover:text-primary px-3 py-2 flex gap-x-2 items-center"
                >
                  {item.title}
                  {item.title !== "Contact" && (
                    <svg
                      fill="#000000"
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
                          id="XMLID_102_"
                          d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                        ></path>{" "}
                      </g>
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {activeMenu === item.title && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Profile Icon */}
            <button className="p-2">
              <HiOutlineUser className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="sr-only">Profile</span>
            </button>

            {/* Wishlist Icon with Notification */}
            <button className="p-2 relative">
              <HiOutlineHeart className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="sr-only">Wishlist</span>
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3 {/* Replace with dynamic count */}
              </span>
            </button>

            {/* Cart Icon with Notification */}
            <button className="p-2 relative">
              <HiOutlineShoppingBag className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="sr-only">Cart</span>
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5 {/* Replace with dynamic count */}
              </span>
            </button>

            {/* Search Icon */}
            <button className="p-2">
              <HiOutlineSearch className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
