"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import CategoryCards from "@/components/CategoryCards";
import BestAudioSection from "@/components/BestAudioSection";
import Link from "next/link";

const earphones = [
  {
    id: "yx1-earphones",
    name: "YX1 Wireless Earphones",
    price: 599,
    new: true,
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound and seamless Bluetooth connectivity.",
    features: [
      'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.',
      'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'
    ],
    includes: [
      { quantity: 2, item: "Earphone unit" },
      { quantity: 6, item: "Multi-size Earplugs" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
      { quantity: 1, item: "Travel Pouch" },
    ],
    image: "/assets/product-yx1-earphones/desktop/image-product.jpg",
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

export default function EarphoneDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = earphones.find((p) => p.id === id);

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
          <div className="flex flex-col gap-8 max-w-[635px]">

          <p className="text-black/50 font-medium text-sm whitespace-pre-line">{product.features[0]}</p>
          <p className="text-black/50 font-medium text-sm whitespace-pre-line">{product.features[1]}</p>
          </div>
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
