"use client";
import Image from "next/image";
import { useCart } from "./CartContext";

type CartModalProps = {
  onClose: () => void;
};

export default function CartModal({ onClose }: CartModalProps) {
  const { cart, removeFromCart, clearCart, total } = useCart();

  return (
    <div className="absolute right-4 top-25  z-50 bg-white shadow-xl rounded-lg p-6 w-[360px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold uppercase text-sm">Cart ({cart.length})</h2>
        <button onClick={clearCart} className="text-black/50 text-sm hover:text-[#D87D4A]">
          Remove all
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-black/60 text-center py-6">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F1F1F1] rounded-md p-2 w-16 h-16 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-black/60 text-sm">$ {item.price}</p>
                  </div>
                </div>

                <div className="bg-[#F1F1F1] px-3 py-1 flex items-center gap-3 rounded-md">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-black/40 hover:text-[#D87D4A]"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button className="text-black/40 hover:text-[#D87D4A]">+</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6">
            <span className="uppercase text-black/60 text-sm">Total</span>
            <span className="font-bold text-lg">$ {total.toLocaleString()}</span>
          </div>

          <button className="bg-[#D87D4A] w-full text-white py-3 rounded-md mt-6 uppercase tracking-widest text-sm hover:bg-[#fbaf85] transition">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}
