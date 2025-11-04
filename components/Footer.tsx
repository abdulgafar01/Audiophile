import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 flex flex-col items-center lg:items-start gap-8">
        {/* Top Row */}
        {/* Logo & Nav */}
        <div className="flex items-center justify-between text-center w-full">
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

        <section className="flex justify-between w-full items-center">
          <div className="flex flex-col max-w-[540px] gap-8">
            {/* Footer Text */}
            <div className="text-center lg:text-left text-white/50 text-sm leading-relaxed max-w-3xl">
              Audiophile is an all-in-one stop to fulfill your audio needs. We’re a small team of music
              lovers and sound specialists who are devoted to helping you get the most out of personal
              audio. Come and visit our demo facility — we’re open 7 days a week.
            </div>

            {/* Copyright */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full text-gray-500 text-xs">
              <p>Copyright 2021. All Rights Reserved</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5">
            <Link href="#" className="hover:text-orange-500 transition">
              <Image
                src='assets/shared/icon-facebook.svg'
                alt="facebook icon"
                width={15}
                height={20}
                className="hover:text-orange-500"
              />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Image
                src='assets/shared/icon-twitter.svg'
                alt="twitter icon"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#" className="hover:text-orange-500 transition">
              <Image
                src='assets/shared/icon-instagram.svg'
                alt="instagram icon"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
}
