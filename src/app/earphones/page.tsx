import BringingYouTheBestAudio from '@/components/Home/BringingYouTheBestAudio'
import ProductCategoryCard from '@/components/Home/ProductCategoryCard'
import NewProductCard from '@/components/NewProductCard'
import PageTitle from '@/components/PageTitle'

const page = () => {
  return (
    <div>
      <PageTitle name={"EARPHONES"}/>
      <div className='container mx-auto px-6 py-12 bg-[#FAFAFA]'>
        <NewProductCard description='Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.' imagePathLink='/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg' title='NEW PRODUCT' subTitle='YX1 WIRELESS EARPHONES' productPath=''/>
        
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
