
'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    // const { cart } = useCart();
    const route = useRouter();
  
    return (
      <header className="bg-black text-white sticky top-0 z-50">
        <div className="container mx-auto p-6 flex justify-between items-center border-b border-gray-700">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => route.push('/')}>audiophile</h1>
          <nav className="hidden md:flex gap-8">
            <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('home')}>HOME</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-headphones')}>HEADPHONES</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-speakers')}>SPEAKERS</span>
            <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-earphones')}>EARPHONES</span>
          </nav>
          <div className="relative">
            <svg onClick={() => setIsCartOpen(!isCartOpen)} className="w-6 h-6 cursor-pointer hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            {/* {cart.length > 0 && <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cart.reduce((acc, item) => acc + item.quantity, 0)}</span>}
            {isCartOpen && <CartModal setPage={setPage} setIsCartOpen={setIsCartOpen} />} */}
          </div>
        </div>
      </header>
    );
}

export default Header
