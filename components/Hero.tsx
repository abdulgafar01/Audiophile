"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-screen">
      <div className="absolute inset-0">
        <Image
          src="/assets/home/desktop/image-hero.jpg"
          alt="Hero Headphone"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col-reverse lg:flex-row items-center justify-start px-6 lg:px-16 py-20 text-center lg:text-left">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 max-w-[400px] items-center lg:items-start"
        >
          <p className="uppercase tracking-[10px] text-sm text-white/50">
            New Product
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            XX99 MARK II <br /> HEADPHONES
          </h1>
          <p className="text-white/75 leading-relaxed">
            Experience natural, lifelike
            audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="self-center lg:self-start bg-[#D87D4A] hover:bg-[#fbaf85] transition px-8 py-3 text-sm tracking-wider uppercase text-white font-semibold cursor-pointer">
            See Product
          </button>
        </motion.div>

        {/* Image Content */}
         {/* <Image
            src="/assets/home/desktop/image-hero.jpg"
            alt="Hero Headphone"
            width={600}
            height={600}
            className="w-[300px] sm:w-[400px] lg:w-[500px] object-contain mx-auto"
            priority
          /> */}
      </div>
    </section>
  );
}


export default Hero;
