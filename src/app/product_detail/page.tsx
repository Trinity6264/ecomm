'use client'
import Button from "@/components/Button"
import BringingYouTheBestAudio from "@/components/Home/BringingYouTheBestAudio"
import ProductCategoryCard from "@/components/Home/ProductCategoryCard"
import InBoxCard from "@/components/InBoxCard"
import SeeMoreCard from "@/components/SeeMoreCard"
import Image from "next/image"

const page = () => {
    return (
        <div className="container mx-auto px-6 pb-12  bg-[#FAFAFA]">
            <p className="text-[#000] opacity-50 py-8 cursor-pointer transition text-[15px] hover:text-[#D87D4A]">Go Back</p>
            <div className='flex flex-col items-center justify-center bg-[#F1F1F1] rounded-[8px] mb-10'>
                <Image src={"/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg"} alt='Speaker' width={400} height={400} />
            </div>
            <p className="text-[#D87D4A] uppercase tracking-[.5em] text-[14px] mb-5">New Product</p>
            <h2 className="text-[28px] text-[#000] font-bold mb-10">XX99 Mark II Headphones</h2>
            <p className="text-[15px] text-[#000] opacity-50 font-medium mb-10">
                The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
            </p>

            <div className="mb-10 flex flex-col">
                <p className="text-[18px] text-[#000] font-bold mb-8">$ 2,999</p>
                <div className="flex gap-4">
                    <div className="flex items-center bg-[#F1F1F1]">
                        <button onClick={() => { }} className="px-4 py-3 text-[#000] text-[13px] opacity-25 cursor-pointer">-</button>
                        <span className="px-6 py-3 font-bold text-[#000]">{1}</span>
                        <button onClick={() => { }} className="px-4 py-3 text-[#000] text-[13px] opacity-25 cursor-pointer">+</button>
                    </div>
                    <Button label="ADD TO CART" onClick={() => { }} />
                </div>
            </div>

            <div className="mb-10 flex flex-col">
                <h2 className="uppercase text-[#000] font-bold text-[24px] mb-4">features</h2>
                <p className="text-[#000] opacity-50 text-[15px] font-medium">Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you&apos;re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you&apos;ll never miss a beat. <br /> <br /> The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
            </div>

            <div className="flex flex-col gap-2 mb-10">
                <h2 className="uppercase text-[#000] font-bold text-[24px] mb-4">in the box</h2>
                <InBoxCard label="Headphone Unit" unit="1x" />
                <InBoxCard label="Replacement Earcups" unit="2x" />
                <InBoxCard label="3.5mm 5m Audio Cable" unit="1x" />
                <InBoxCard label="Travel Bag" unit="1x" />
            </div>

            <div className=" rounded-[8px] flex flex-col gap-6 mb-20">
                <Image src={'/assets/product-xx99-mark-two-headphones/mobile/image-gallery-1.jpg'} alt="Product image" className="object-center h-[200px] rounded-[8px]" height={100} width={450} />
                <Image src={'/assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg'} alt="Product image" className="object-center h-[200px] rounded-[8px]" height={100} width={450} />
                <Image src={'/assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg'} alt="Product image" className="object-center rounded-[8px]" height={700} width={450} />
            </div>

            <h2 className="font-bold text-[#000] uppercase text-center text-[24px]">you may also like</h2>
            <SeeMoreCard imagePath="/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg" productID="43" productLabel="XX99 MARK I" />
            <SeeMoreCard imagePath="/assets/product-xx59-headphones/mobile/image-product.jpg" productID="3" productLabel="XX59" />
            <SeeMoreCard imagePath="/assets/product-zx9-speaker/mobile/image-product.jpg" productID="3" productLabel="ZX9 SPEAKER" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-36 mb-32">
                <ProductCategoryCard name="Headphones" image="/assets/shared/desktop/image-category-thumbnail-headphones.png" path={'/headphones'} />
                <ProductCategoryCard name="Speakers" image="/assets/shared/desktop/image-category-thumbnail-speakers.png" path={'/speakers'} />
                <ProductCategoryCard name="Earphones" image="/assets/shared/desktop/image-category-thumbnail-earphones.png" path={'/earphones'} />
            </div>

            <BringingYouTheBestAudio />
        </div>
    )
}

export default page
