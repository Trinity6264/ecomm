
'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const route = useRouter();

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto p-6 flex justify-between items-center border-b border-gray-700">
        <div className="relative cursor-pointer">
          <Image src={"/assets/shared/tablet/icon-hamburger.svg"} alt="menu" height={15} width={15} />
        </div>
        <h1 className="text-2xl font-bold cursor-pointer" onClick={() => route.push('/')}>audiophile</h1>
        <nav className="hidden md:flex gap-8">
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('home')}>HOME</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-headphones')}>HEADPHONES</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-speakers')}>SPEAKERS</span>
          <span className="cursor-pointer hover:text-orange-500 transition-colors text-sm uppercase font-bold tracking-widest" onClick={() => route.push('category-earphones')}>EARPHONES</span>
        </nav>
        <div className="relative cursor-pointer">
          <Image src={"/assets/shared/desktop/icon-cart.svg"} alt="menu" height={20} width={20} />
        </div>
      </div>
    </header>
  );
}

export default Header
