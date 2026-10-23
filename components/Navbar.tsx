"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import CartModal from "./CartModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-black text-white backdrop-blur-sm">
      <div className="max-w-5xl mx-auto  py-8 flex items-center justify-between border-b border-white/20">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight uppercase">
          <Image
            src="/assets/shared/desktop/logo.svg"
            alt="Audiophile Logo"
            width={143}
            height={25}
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 uppercase text-sm tracking-widest">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive ? "text-[#D87D4A]" : "text-white hover:text-[#D87D4A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          
        </div>

        {/* Cart Icon */}
        <button
          aria-label="Shopping Cart"
          className="hover:text-orange-500 transition cursor-pointer"
          onClick={() => setShowCart(!showCart)}
        >
          <ShoppingCart size={22} />
        </button>
      </div>
      {/* <Image
        src="/assets/shared/Rectangle.svg"
        alt="Audiophile Logo"
        width={1110}
        height={1}
        className="mx-auto hidden md:block"
      /> */}

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </header>
  );
}
