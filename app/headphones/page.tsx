"use client";
import BestAudioSection from "@/components/BestAudioSection";
import CategoryCards from "@/components/CategoryCards";
import Image from "next/image";
import Link from "next/link";

const headphones = [
  {
    id: "xx99-mark-two",
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: "/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg",
    new: true,
  },
  {
    id: "xx99-mark-one",
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate sound reproduction for audiophiles, mixing engineers, and music aficionados alike.",
    image: "/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg",
  },
  {
    id: "xx59",
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: "/assets/product-xx59-headphones/desktop/image-product.jpg",
  },
];

const Headphones = () => {
  return (
    <main>
      {/* Header Banner */}
      <section className="bg-black text-white text-center py-20">
        <h1 className="text-3xl md:text-4xl tracking-wide font-bold uppercase">
          Headphones
        </h1>
      </section>

      {/* Product List */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-32">
        {headphones.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="bg-[#F1F1F1] rounded-lg shrink-0">
              <Image
                src={product.image}
                alt={product.name}
                width={540}
                height={560}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col space-y-4 text-center md:text-left max-w-md">
              {product.new && (
                <p className="text-[#D87D4A] uppercase tracking-[10px] text-sm">
                  New Product
                </p>
              )}
              <h2 className="text-3xl font-bold uppercase">{product.name}</h2>
              <p className="text-black/60 leading-relaxed">
                {product.description}
              </p>
              <Link href={`/headphones/${product.id}`}>
                 <button className="self-center lg:self-start bg-[#D87D4A] hover:bg-[#fbaf85] transition px-8 py-3 text-sm tracking-wider uppercase text-white font-semibold cursor-pointer">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Category & About Sections */}
      <CategoryCards />
      <BestAudioSection/>
    </main>
  );
}

export default Headphones;