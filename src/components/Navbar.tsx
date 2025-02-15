// components/Navbar.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
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
                  className="text-gray-700 hover:text-gray-900 px-3 py-2"
                >
                  {item.title}
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
            <button className="p-2">
              <span className="sr-only">Search</span>
              {/* Add search icon */}
            </button>
            <button className="p-2">
              <span className="sr-only">Cart</span>
              {/* Add cart icon */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
