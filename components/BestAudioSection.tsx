"use client";

import Image from "next/image";

export default function BestAudioSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-28 grid gap-12 md:grid-cols-2 items-center font-manrope">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-8">
          Bringing You the <span className="text-[#D87D4A]">Best</span> Audio Gear
        </h2>
        <p className="text-black/60 leading-relaxed">
          Located at the heart of Nigeria, Audiophile is the premier store for
          high-end headphones, earphones, speakers, and audio accessories. We
          have a large showroom and luxury demonstration rooms available for you
          to browse and experience a wide range of our products.
        </p>
      </div>

      {/* Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/assets/shared/desktop/image-best-gear.jpg"
          alt="Best Audio Gear"
          width={540}
          height={588}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
