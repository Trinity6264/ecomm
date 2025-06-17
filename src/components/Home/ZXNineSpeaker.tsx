import Image from "next/image";

export default function ZX9SpeakerCard() {
    return (
        <div className="relative w-full mx-auto bg-[#D87D4A] rounded-3xl overflow-hidden shadow-2xl">
            <Image
                src="/assets/home/desktop/pattern-circles.svg"
                alt="Speaker ZX7"
                width={500}
                height={700}
                className="absolute inset-0 flex items-center justify-center top-0 left-0"
            />
            <div className="relative z-10 px-8 py-24 text-center">
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/assets/home/desktop/image-speaker-zx9.png"
                            alt="Speaker ZX7"
                            width={200}
                            height={150}
                        />

                    </div>
                </div>

                <div className="mb-6">
                    <h1 className="text-[36px] font-bold text-white tracking-wider"> <span>ZX9</span> <br /><span>SPEAKER</span></h1>
                </div>


                <p className="text-white text-[15px] leading-relaxed font-medium mb-8 px-2 opacity-75">
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </p>

                <button className="bg-black text-white text-[13px] font-bold py-4 px-8 tracking-widest cursor-pointer duration-300">
                    SEE PRODUCT
                </button>
            </div>
        </div>
    );
}