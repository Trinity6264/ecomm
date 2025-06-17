'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface NewProductCardProps {
    title?: string;
    subTitle: string;
    description: string;
    imagePathLink: string;
    productPath: string;
}

const NewProductCard = (props: NewProductCardProps) => {
    const router = useRouter();
    const { title, subTitle, description, imagePathLink, productPath } = props;
    return (
        <div className="flex flex-col items-center justify-center mt-30">
            <div className='flex flex-col items-center justify-center bg-[#F1F1F1] rounded-[8px] '>
                <Image src={imagePathLink} alt='Speaker' width={400} height={400} />
            </div>
            <div className='flex flex-col items-center justify-center mt-12'>
                { title &&<p className='text-[#D87D4A] text-[14px] font-normal tracking-[10px]'>{title}</p>}
                <h3 className='text-[#000] text-[28px] font-bold tracking-[1px] mt-4'>{subTitle}</h3>
                <p className='text-[#000] opacity-50 text-[14px] font-medium text-center mt-8'>{description}</p>
                <button onClick={()=>{
                    router.push(productPath);
                }} className="py-4 px-8 bg-[#D87D4A] font-bold text-[13px] transition-colors mt-8 cursor-pointer">See Product</button>
            </div>
        </div>
    )
}

export default NewProductCard
