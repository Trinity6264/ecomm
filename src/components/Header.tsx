'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Header = () => {
  const route = useRouter();

  const navigate = (path: string) => {
    route.push(path);
  }

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
        <div className="relative cursor-pointer" onClick={() => { }}>
          {/* Replaced with a simple SVG for compatibility */}
          <Image src={"/assets/shared/desktop/icon-cart.svg"} alt="menu" height={20} width={20} />
          {/* {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
          )} */}
        </div>
      </div>
      {/* Conditionally render the cart popup with a transition */}
      {/* {isCartOpen && (
        <CartPopup
          cartItems={cartItems}
          onRemoveAll={handleRemoveAll}
          onQuantityChange={handleQuantityChange}
          onCheckout={handleCheckout}
          onClose={() => setIsCartOpen(false)}
          total={total}
        />
      )} */}
    </header>
  );
}

export default Header
