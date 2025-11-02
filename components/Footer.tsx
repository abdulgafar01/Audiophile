import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col items-center lg:items-start gap-12">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
          {/* Logo & Nav */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
            <Link href="/" className="text-xl font-extrabold tracking-tight uppercase">
              audiophile
            </Link>
            <nav className="flex flex-wrap justify-center lg:justify-start gap-6 uppercase text-sm tracking-widest">
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
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <Link href="#" className="hover:text-orange-500 transition">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center lg:text-left text-gray-400 text-sm leading-relaxed max-w-3xl">
          Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music
          lovers and sound specialists who are devoted to helping you get the most out of personal
          audio. Come and visit our demo facility — we’re open 7 days a week.
        </div>

        {/* Copyright */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full text-gray-500 text-xs pt-8 border-t border-white/10">
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
