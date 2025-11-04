"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductHighlights() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-12 font-manrope">
      {/* ZX9 Speaker */}
      <div className="relative flex flex-col max-h-[560px] items-center text-center bg-[#D87D4A] rounded-lg overflow-hidden py-16 px-8 md:flex-row md:justify-between md:text-left">
        {/* Speaker Image */}


        <div className="relative w-[172px] h-[207px] md:w-[410px] md:h-[493px]">
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="ZX9 Speaker"
            fill
            className="object-contain"
          />
        </div>
        

        {/* Text Content */}
        <div className="text-white max-w-sm mt-10 md:mt-0 md:mr-20">
          <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
            ZX9 <br /> Speaker
          </h2>
          <p className="text-white/80 mt-6 mb-8">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/product/zx9-speaker"
            className="bg-black text-white uppercase text-sm tracking-wider px-6 py-3 rounded hover:bg-[#4C4C4C] transition"
          >
            See Product
          </Link>
        </div>
      </div>

      {/* ZX7 Speaker */}
      <div className="relative rounded-lg overflow-hidden bg-[#F1F1F1] px-10 py-24 flex flex-col justify-between md:flex-row md:items-center">
        <Image
          src="/assets/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          width={700}
          height={320}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 max-w-sm md:ml-20">
          <h3 className="text-3xl font-bold uppercase mb-6">ZX7 Speaker</h3>
          <Link
            href="/product/zx7-speaker"
            className="border border-black text-black uppercase text-sm tracking-wider px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </div>

      {/* YX1 Earphones */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            width={600}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#F1F1F1] rounded-lg flex flex-col justify-center p-26">
          <h3 className="text-2xl font-bold uppercase mb-6">YX1 Earphones</h3>
          <Link
            href="/earphones"
            className="self-start border border-black text-black uppercase text-sm tracking-wider px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}
