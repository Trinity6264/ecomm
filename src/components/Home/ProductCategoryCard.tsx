'use client'

import Image from "next/image"
import { useRouter } from "next/navigation";
import { FC } from "react";



interface CategoryCardProps {
    name: string;
    image: string;
    path: string;
}
  

const ProductCategoryCard:FC<CategoryCardProps> = ({ name, image, path }) => {

    const router = useRouter();

  return (
      <div className="relative bg-gray-100 rounded-lg pt-24 pb-8 mt-14 text-center flex flex-col items-center group cursor-pointer" onClick={()=>{
          router.push(path)
      }}>
          <Image src={image} width={100} height={100} alt={name} className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-auto group-hover:scale-110 transition-transform duration-300" />
          <h3 className="text-[15px] text-[#000] font-bold uppercase ">{name}</h3>
          <button className="mt-4 text-[#000] opacity-50 font-bold flex items-center gap-2 group-hover:text-orange-500 transition-colors cursor-pointer">
              Shop <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
      </div>
  )
}

export default ProductCategoryCard
