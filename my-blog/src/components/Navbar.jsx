"use client";

import Link from "next/link";
import { useState } from "react";
import AnimatedHamburgerButton from "./AnimatedBurgerMenu";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white p-4">
      <nav className="flex items-center justify-between">
        <span className="text-2xl font-bold">Media Showcase</span>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              href="/"
              className="px-2 py-1 transition hover:bg-red-500 hover:rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/movies"
              className="px-2 py-1 transition hover:bg-red-500 hover:rounded"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              href="/games"
              className="px-2 py-1 transition hover:bg-red-500 hover:rounded"
            >
              Games
            </Link>
          </li>
        </ul>
        {/* Mobile Hamburger Button */}
        <div className="md:hidden">
          <AnimatedHamburgerButton onClick={toggleMobileMenu} />
        </div>
      </nav>
      {/* Mobile Menu with Smooth Transition */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden mt-2 overflow-hidden"
          >
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-red-500 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/movies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-red-500 rounded"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/games"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-red-500 rounded"
                >
                  Games
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
