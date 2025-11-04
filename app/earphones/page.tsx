"use client";

import Image from "next/image";
import Link from "next/link";
import CategoryCards from "@/components/CategoryCards";
import BestAudioSection from "@/components/BestAudioSection";

const earphones = [
  {
    id: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound and seamless Bluetooth connectivity.",
    image: "/assets/product-yx1-earphones/desktop/image-product.jpg",
    new: true,
  },
];

export default function EarphonesPage() {
  return (
    <main>
      <section className="bg-black text-white text-center py-20">
      <h1 className="text-3xl md:text-4xl tracking-wide font-bold uppercase">
        Earphones
      </h1>

      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {earphones.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center gap-12"
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
              <Link href={`/earphones/${product.id}`}>
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
