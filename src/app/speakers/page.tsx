import PageTitle from '@/components/PageTitle'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <PageTitle name={"SPEAKERS"}/>
      <div className='container mx-auto px-6 py-12 bg-[#FAFAFA]'>
        
        <div className='flex flex-col items-center justify-center bg-[#F1F1F1] rounded-[8px] '>
          <Image src={"/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"} alt='Speaker' width={400} height={400}/>
        </div>

        {/* new product */}
        <div className='flex flex-col items-center justify-center mt-12'>
          <p className='text-[#D87D4A] text-[14px] font-normal tracking-[10px]'>NEW PRODUCT</p>
          <h3 className='text-[#000] text-[28px] font-bold tracking-[1px] mt-4'>YX1 WIRELESS EARPHONES</h3>
          <p className='text-[#000] opacity-50 text-[14px] font-medium text-center mt-8'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
        </div>
      </div>
    </div>
  )
}

export default page
