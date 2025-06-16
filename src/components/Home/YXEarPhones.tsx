import Image from "next/image"

const YXEarPhones = () => {
    return (
        
            <div className="flex flex-col gap-10">
                <div className="bg-gray-200 rounded-lg">
                    <Image src={'/assets/home/mobile/image-earphones-yx1.jpg'} alt={"Ear Phones"} width={400} height={300} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="bg-[#F1F1F1] rounded-lg p-8 md:p-24 flex flex-col justify-center gap-6">
                    <h2 className="text-3xl font-bold mb-8 uppercase">YX1 Wireless Earphones</h2>
                    <button onClick={() => { }} className="border border-black bg-transparent text-black uppercase px-8 py-4 hover:bg-[#D86B4D] transition-colors self-start cursor-pointer text-[13px] font-bold rounded-[2px]">See Product</button>
                </div>
            </div>
    )
}

export default YXEarPhones
