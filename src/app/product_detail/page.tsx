// 'use client'
import BringingYouTheBestAudio from "@/components/Home/BringingYouTheBestAudio"
import ProductCategoryCard from "@/components/Home/ProductCategoryCard"
import InBoxCard from "@/components/InBoxCard"
import SeeMoreCard from "@/components/SeeMoreCard"
import Image from "next/image"

const page = () => {
    return (
        <div className="container mx-auto px-6 py-12 bg-[#FAFAFA]">

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
