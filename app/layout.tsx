import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartContext";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Audiophile E-commerce",
  description: "Audiophile E-commerce built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} bg-white text-black antialiased`}
      >
        <CartProvider>
        <main className="relative h-screen">
        <Navbar />
        {children}
        <Footer />
        </main>

        </CartProvider>
      </body>
    </html>
  );
}
