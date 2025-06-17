import NewProductCard from '@/components/NewProductCard'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <div>
      <PageTitle name={"SPEAKERS"}/>
      <div className='container mx-auto px-6 py-12 bg-[#FAFAFA]'>
        
        <NewProductCard description='Upgrade your sound system with the all new ZX9 active speaker. It&apos;s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.' imagePathLink='/assets/product-zx9-speaker/mobile/image-product.jpg' title='NEW PRODUCT' subTitle='YX1 WIRELESS EARPHONES' productPath=''/>
        
        <NewProductCard description='Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.' imagePathLink='/assets/product-zx7-speaker/mobile/image-product.jpg'  subTitle='ZX7 SPEAKER' productPath=''/>
      </div>
    </div>
  )
}

export default page
