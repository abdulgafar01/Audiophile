"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-12 py-20 lg:py-32">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-md text-center lg:text-left"
        >
          <p className="uppercase tracking-[10px] text-sm text-gray-400">
            New Product
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="self-center lg:self-start bg-orange-500 hover:bg-orange-600 transition px-8 py-3 text-sm tracking-wider uppercase font-semibold">
            See Product
          </button>
        </motion.div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 lg:mb-0"
        >
          <Image
            src="/images/hero-headphones.png"
            alt="XX99 Mark II Headphones"
            width={600}
            height={600}
            className="w-[300px] sm:w-[400px] lg:w-[500px] object-contain mx-auto"
            priority
          />
        </motion.div>
      </div>

      {/* Optional subtle background ring or gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/50 pointer-events-none" />
    </section>
  );
}


export default Hero;
