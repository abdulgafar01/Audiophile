"use client";

import Image from "next/image";
import Link from "next/link";
import CategoryCards from "@/components/CategoryCards";
import BestAudioSection from "@/components/BestAudioSection";

const speakers = [
  {
    id: "zx9-speaker",
    name: "ZX9 Speaker",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity and high-fidelity sound.",
    image: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    new: true,
  },
  {
    id: "zx7-speaker",
    name: "ZX7 Speaker",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components for truly remarkable sound.",
    image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    new: false,
  },
];

export default function SpeakersPage() {
  return (
    <main>
      {/* Hero Header */}
      <section className="bg-black text-white text-center py-20">
      <h1 className="text-3xl md:text-4xl tracking-wide font-bold uppercase">
        Speakers
      </h1>
      </section>

      {/* Product List */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {speakers.map((product, i) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-[#F1F1F1] rounded-lg p-10 flex justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="object-contain"
              />
            </div>

            <div className="space-y-4 max-w-md text-center md:text-left">
              {product.new && (
                <p className="text-[#D87D4A] uppercase tracking-[10px] text-sm">
                  New Product
                </p>
              )}
              <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
              <p className="text-black/60">{product.description}</p>
              <Link href={`/speakers/${product.id}`}>
                <button className="bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-wider hover:bg-[#FBAF85] transition">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      <CategoryCards />
      <BestAudioSection />
    </main>
  );
}
