import Image from "next/image";

const BringingYouTheBestAudio = () => {
    return (
        <section className="container mx-auto px-6 md:px-24 py-12">
            <div className="flex flex-col gap-12 items-center">
                <div className="rounded-lg h-80 md:h-full w-full">
                    <Image src={"/assets/shared/mobile/image-best-gear.jpg"} width={400} height={300} alt="Man wearing headphones" className="w-full h-full object-cover rounded-[8px]" />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-[28px] font-bold text-center uppercase">Bringing you the <span className="text-orange-500">best</span> audio gear</h2>
                    <p className="mt-8 text-[#000] font-medium text-[15px] text-center opacity-50">
                        Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default BringingYouTheBestAudio
