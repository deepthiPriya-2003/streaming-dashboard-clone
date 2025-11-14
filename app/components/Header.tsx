"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all 
        ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          StreamNova
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-6 text-white">
          <Link href="/" className="hover:text-red-500 transition">Home</Link>
          <Link href="/movies" className="hover:text-red-500 transition">Movies</Link>
          <Link href="/watchlist" className="hover:text-red-500 transition">Watchlist</Link>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-6 text-white">
          <FiSearch size={22} className="cursor-pointer hover:text-red-500" />
          <FaUserCircle size={26} className="cursor-pointer hover:text-red-500" />
        </div>

      </nav>
    </header>
  );
}
