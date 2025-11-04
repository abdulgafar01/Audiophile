"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Headphones",
    image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    href: "/headphones",
  },
  {
    name: "Speakers",
    image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    href: "/speakers",
  },
  {
    name: "Earphones",
    image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    href: "/earphones",
  },
];

export default function CategoryCards() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 grid gap-16 md:gap-10 items-center md:grid-cols-3 font-manrope mt-28">
      {categories.map((category) => (
        <div
          key={category.name}
          className="relative bg-[#F1F1F1] rounded-lg flex flex-col items-center justify-end pt-20 pb-6 shadow-sm hover:shadow-md transition-shadow duration-300 group max-w-[350px] max-h-[204px]"
        >
          {/* Product Image */}
          <div className="absolute -top-10">
            <Image
              src={category.image}
              alt={category.name}
              width={150}
              height={150}
              className="object-contain"
            />
          </div>

          {/* Label */}
          <h3 className="text-lg font-bold uppercase tracking-wider mt-24 text-black">
            {category.name}
          </h3>

          {/* Shop Link */}
          <Link
            href={category.href}
            className="mt-2 text-sm tracking-[1px] text-black/50 flex items-center gap-2 group-hover:text-[#D87D4A] transition-colors"
          >
            SHOP
            <span className="text-[#D87D4A] group-hover:translate-x-1 transition-transform">
              <Image
              src='assets/shared/icon-arrow-right.svg'
              alt="arrow right"
              width={5}
              height={10}
              />
            </span>
          </Link>
        </div>
      ))}
    </section>
  );
}
