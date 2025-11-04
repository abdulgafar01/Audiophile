"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import CategoryCards from "@/components/CategoryCards";
import BestAudioSection from "@/components/BestAudioSection";
import Link from "next/link";

const speakers = [
  {
    id: "zx9-speaker",
    name: "ZX9 Speaker",
    price: 4500,
    new: true,
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity and high-fidelity sound.",
    features: `The ZX9 features dual connectivity and a powerful driver setup that delivers rich, dynamic sound.`,
    includes: [
      { quantity: 2, item: "Speaker Units" },
      { quantity: 2, item: "Speaker Cloth Panels" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
      { quantity: 1, item: "10m Optical Cable" },
    ],
    image: "/assets/product-zx9-speaker/desktop/image-product.jpg",
    gallery: [
      "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    ],
     others: [
      {
        name: "XX99 Mark I",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        link: "/headphones/xx99-mark-one",
      },
      {
        name: "XX99 Mark II",
        image: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        link: "/headphones/xx99-mark-two",
      },
      {
        name: "ZX9 Speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        link: "/speakers/zx9",
      },
    ],
  },
  {
    id: "zx7-speaker",
    name: "ZX7 Speaker",
    price: 3500,
    new: false,
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end components for truly remarkable sound.",
    features: `ZX7 combines elegance with audio accuracy, ensuring crystal clear sound for both casual and critical listening.`,
    includes: [
      { quantity: 2, item: "Speaker Units" },
      { quantity: 2, item: "Speaker Cloth Panels" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "7.5m Optical Cable" },
    ],
    image: "/assets/product-zx7-speaker/desktop/image-product.jpg",
    gallery: [
      "/assets/product-xx59-headphones/desktop/image-gallery-1.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-2.jpg",
      "/assets/product-xx59-headphones/desktop/image-gallery-3.jpg",
    ],
     others: [
      {
        name: "XX99 Mark I",
        image: "/assets/shared/desktop/image-xx99-mark-one-headphones.jpg",
        link: "/headphones/xx99-mark-one",
      },
      {
        name: "XX99 Mark II",
        image: "/assets/shared/desktop/image-xx99-mark-two-headphones.jpg",
        link: "/headphones/xx99-mark-two",
      },
      {
        name: "ZX9 Speaker",
        image: "/assets/shared/desktop/image-zx9-speaker.jpg",
        link: "/speakers/zx9",
      },
    ],
  },
];

export default function SpeakerDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = speakers.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button
          onClick={() => router.back()}
          className="text-[#D87D4A] hover:underline cursor-pointer"
        >
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      <button
        onClick={() => router.back()}
        className="text-black/60 hover:text-[#D87D4A] mb-10 cursor-pointer"
      >
        Go Back
      </button>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="bg-[#F1F1F1] rounded-lg p-10 flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="space-y-4 max-w-md">
          {product.new && (
            <p className="text-[#D87D4A] uppercase tracking-[10px] text-sm">
              New Product
            </p>
          )}
          <h1 className="text-3xl font-bold uppercase">{product.name}</h1>
          <p className="text-black/60">{product.description}</p>
          <p className="text-lg font-bold">$ {product.price.toLocaleString()}</p>

          <div className="flex gap-4 items-center">
            <div className="bg-[#F1F1F1] px-4 py-2 flex gap-6 items-center">
              <button className="text-black/40">-</button>
              <span className="font-semibold">1</span>
              <button className="text-black/40">+</button>
            </div>
            <button className="bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-wider hover:bg-[#FBAF85] transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold uppercase mb-4">Features</h2>
          <p className="text-black/60 whitespace-pre-line">{product.features}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold uppercase mb-4">In The Box</h2>
          <ul className="space-y-2">
            {product.includes.map((item) => (
              <li key={item.item} className="flex gap-4">
                <span className="text-[#D87D4A] font-bold">{item.quantity}x</span>
                <span className="text-black/60">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

                  {/* Product Gallery */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-6">
                      <Image
                        src={product.gallery[0]}
                        alt="Gallery 1"
                        width={400}
                        height={400}
                        className="rounded-lg"
                      />
                      <Image
                        src={product.gallery[1]}
                        alt="Gallery 2"
                        width={400}
                        height={400}
                        className="rounded-lg"
                      />
                    </div>
                    <Image
                      src={product.gallery[2]}
                      alt="Gallery 3"
                      width={800}
                      height={800}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
            
                  {/* You May Also Like */}
                  <section className="text-center space-y-10">
                    <h2 className="text-2xl font-bold uppercase">You May Also Like</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                      {product.others.map((item) => (
                        <div key={item.name} className="space-y-6">
                          <div className="bg-[#F1F1F1] rounded-lg flex justify-center p-10">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={250}
                              height={250}
                              className="object-contain"
                            />
                          </div>
                          <h3 className="text-lg font-bold uppercase">{item.name}</h3>
                          <Link
                            href={item.link}
                            className="bg-[#D87D4A] text-white px-6 py-3 uppercase tracking-wider hover:bg-[#FBAF85] transition inline-block cursor-pointer"
                          >
                            See Product
                          </Link>
                        </div>
                      ))}
                    </div>
                  </section>
      

      <CategoryCards />
      <BestAudioSection />
    </main>
  );
}
