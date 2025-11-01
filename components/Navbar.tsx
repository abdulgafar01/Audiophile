"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between border-b border-white/10">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight uppercase">
          audiophile
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-orange-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart Icon */}
        <button
          aria-label="Shopping Cart"
          className="hover:text-orange-500 transition"
        >
          <ShoppingCart size={22} />
        </button>
      </div>
    </header>
  );
}
