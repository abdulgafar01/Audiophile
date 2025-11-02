"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import CategoryCards from "@/components/CategoryCards";
import BestAudioSection from "@/components/BestAudioSection";

const products = [
  {
    id: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    price: 2999,
    new: true,
    description:
      "The new XX99 Mark II headphones redefine your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features: `Featuring genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation.`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 2, item: "Replacement Earcups" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
      { quantity: 1, item: "Travel Bag" },
    ],
    image: "/images/xx99-mark-two.png",
  },
  {
    id: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    price: 1750,
    new: false,
    description:
      "The classic XX99 Mark I offers detailed and accurate sound reproduction for audiophiles, mixing engineers, and music aficionados alike.",
    features: `Built for comfort and clarity, the XX99 Mark I uses premium materials for lasting durability.`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "3.5mm Audio Cable" },
    ],
    image: "/images/xx99-mark-one.png",
  },
  {
    id: "xx59",
    name: "XX59 Headphones",
    price: 899,
    new: false,
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones.",
    features: `Lightweight design, crisp sound, and reliable battery life make the XX59 a perfect daily companion.`,
    includes: [
      { quantity: 1, item: "Headphone Unit" },
      { quantity: 1, item: "User Manual" },
      { quantity: 1, item: "USB-C Charging Cable" },
    ],
    image: "/images/xx59.png",
  },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <button
          onClick={() => router.back()}
          className="text-[#D87D4A] hover:underline"
        >
          Go Back
        </button>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-20">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="text-black/60 hover:text-[#D87D4A] mb-10"
      >
        Go Back
      </button>

      {/* Product Overview */}
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

      {/* Features and Box Content */}
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

      {/* Reusable sections */}
      <CategoryCards />
      <BestAudioSection />
    </main>
  );
}
