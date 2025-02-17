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
  HiMenu,
  HiX,
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="bg-white shadow-sm z-50">
      {/* Top Banner */}
      <div className="w-full bg-primary flex justify-center items-center text-white text-xs p-2.5">
        FREE SHIPPING* on orders of $50 or more.{" "}
        <Link href="/" className="underline mr-1">
          Carrier surcharge
        </Link>
        may apply.
      </div>

      <div className="max-w-screen-2xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center h-20">
          <button onClick={() => setIsMenuOpen(true)} className="p-2">
            <HiMenu className="w-6 h-6 text-gray-700" />
          </button>

          <Link
            href="/"
            className="text-2xl font-bold absolute left-1/2 -translate-x-1/2"
          >
            OLARS
          </Link>

          <div className="flex items-center">
            <button className="p-2 relative">
              <HiOutlineShoppingBag className="text-gray-700 w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold">OLARS</span>
            </Link>
          </div>

          <div className="flex items-center space-x-8">
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
                      fill="currentColor"
                      height="10px"
                      width="10px"
                      viewBox="0 0 330 330"
                    >
                      <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                    </svg>
                  )}
                </Link>

                <AnimatePresence>
                  {activeMenu === item.title && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute left-0 w-48 bg-white rounded-sm py-2 z-50 shadow-inner"
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary"
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
              <HiOutlineUser className="text-gray-700 hover:text-primary w-6 h-6" />
            </button>
            <button className="p-2 relative">
              <HiOutlineHeart className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <Link href="/cart" className="p-2 relative">
              <HiOutlineShoppingBag className="text-gray-700 hover:text-primary w-6 h-6" />
              <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                5
              </span>
            </Link>
            <button className="p-2">
              <HiOutlineSearch className="text-gray-700 hover:text-primary w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 h-full w-64 bg-white z-50 shadow-xl"
            >
              <div className="p-4 border-b flex justify-between items-center">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2">
                  <HiX className="w-6 h-6" />
                </button>
              </div>

              <div className="overflow-y-auto h-full p-4">
                {navItems.map((item) => (
                  <div key={item.title} className="mb-2">
                    <div
                      className="flex justify-between items-center py-2 cursor-pointer"
                      onClick={() =>
                        setOpenSubmenu(
                          openSubmenu === item.title ? null : item.title
                        )
                      }
                    >
                      <Link href={item.path} className="text-gray-700">
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <span
                          className={`transform transition-transform ${
                            openSubmenu === item.title ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      )}
                    </div>

                    {item.submenu && openSubmenu === item.title && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-4"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.path}
                            className="block py-2 text-sm text-gray-500 hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                <div className="mt-8 space-y-4">
                  <button className="w-full flex items-center gap-2 text-gray-700">
                    <HiOutlineUser className="w-5 h-5" />
                    Profile
                  </button>
                  <button className="w-full flex items-center gap-2 text-gray-700">
                    <HiOutlineHeart className="w-5 h-5" />
                    Wishlist
                  </button>
                  <button className="w-full flex items-center gap-2 text-gray-700">
                    <HiOutlineSearch className="w-5 h-5" />
                    Search
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
