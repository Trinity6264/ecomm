'use client'

import Image from "next/image"
import Button from "./Button";
import { useRouter } from "next/navigation";


interface SeeMoreCardProps {
    imagePath: string,
    productLabel: string,
    productID: string,
}

const SeeMoreCard = (props: SeeMoreCardProps) => {
    const { imagePath, productID, productLabel } = props;
    const router = useRouter();

    return (
        <div className="flex flex-col gap-6 items-center mt-10">
            {/* Image */}
            <div className="bg-[#F1F1F1] p-3 rounded-[8px] flex justify-center items-center w-full ">
                <Image src={imagePath} alt="Product image" width={150} height={150} />
            </div>
            <h3 className="text-[24px] font-bold text-[#000]">{productLabel}</h3>
            <Button label="See Product" onClick={() => {
                router.push(`/${productID}`)
            }} />
        </div>
    )
}

export default SeeMoreCard
