'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks'
import { useState } from 'react';
import CartPopUp from './CartPopUp';



const Header = () => {
  const route = useRouter();
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  const navigate = (path: string) => {
    route.push(path);
  }

  const cartItems = useAppSelector((state) => state.cart.items);


  return (
    <header className="bg-black text-white sticky top-0 z-30">
      <div className="container mx-auto p-6 flex justify-between items-center border-b border-gray-700">
        <div className="relative cursor-pointer md:hidden">
          <Image src={"/assets/shared/tablet/icon-hamburger.svg"} alt="menu" height={15} width={15} />

        </div>
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>audiophile</h1>
        <nav className="hidden md:flex gap-8">
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => navigate('/home')}>HOME</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => navigate('/category-headphones')}>HEADPHONES</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => navigate('/category-speakers')}>SPEAKERS</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => navigate('/category-earphones')}>EARPHONES</span>
        </nav>
        <div className="relative cursor-pointer" onClick={() => { 
          setCartOpen(true)
        }}>
          {/* Replaced with a simple SVG for compatibility */}
          <Image src={"/assets/shared/desktop/icon-cart.svg"} alt="menu" height={20} width={20} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>
      {/* Conditionally render the cart popup with a transition */}
      {isCartOpen && (
        <CartPopUp
          onClose={() => setCartOpen(false)}
        />
      )}
    </header>
  );
}

export default Header
