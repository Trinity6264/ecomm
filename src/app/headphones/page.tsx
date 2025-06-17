import BringingYouTheBestAudio from '@/components/Home/BringingYouTheBestAudio'
import ProductCategoryCard from '@/components/Home/ProductCategoryCard'
import NewProductCard from '@/components/NewProductCard'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <div>
      <PageTitle name={"HEADPHONES"}/>
      <div className='container mx-auto px-6 py-12 bg-[#FAFAFA]'>
      
        <NewProductCard description='The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.' imagePathLink='/assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg' title='NEW PRODUCT' subTitle='XX99 Mark II Headphones' productPath=''/>
      
        <NewProductCard description='As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.' imagePathLink='/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg' subTitle='XX99 Mark I Headphones' productPath=''/>
        
        <NewProductCard description='Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.' imagePathLink='/assets/product-xx59-headphones/mobile/image-product.jpg' subTitle='XX59 Headphones' productPath=''/>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-36 mb-32">
          <ProductCategoryCard name="Headphones" image="/assets/shared/desktop/image-category-thumbnail-headphones.png" path={'/headphones'} />
          <ProductCategoryCard name="Speakers" image="/assets/shared/desktop/image-category-thumbnail-speakers.png" path={'/speakers'} />
          <ProductCategoryCard name="Earphones" image="/assets/shared/desktop/image-category-thumbnail-earphones.png" path={'/earphones'} />
        </div>

        <BringingYouTheBestAudio />

      </div>
    </div>
  )
}

export default page
