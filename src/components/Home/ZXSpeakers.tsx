import Image from "next/image";

const ZXSpeakers = () => {
    return (
        <div className="relative w-full h-[400px] md:h-full rounded-lg overflow-hidden">
            <Image
                src="/assets/home/mobile/image-speaker-zx7.jpg"
                alt="Speaker ZX7" 
                fill
                className="object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center gap-4 px-6 z-10">
                <h2 className="text-[28px] font-bold mb-8 uppercase text-black">
                    ZX7 Speaker
                </h2>
                <button onClick={() => { }} className="border border-black bg-transparent text-black uppercase px-8 py-4 hover:bg-[#D86B4D] transition-colors self-start cursor-pointer text-[13px] font-bold rounded-[2px]">See Product</button>
            </div>
        </div>
    );
};


export default ZXSpeakers
