import BringingYouTheBestAudio from "@/components/Home/BringingYouTheBestAudio"
import ProductCategoryCard from "@/components/Home/ProductCategoryCard"

const page = () => {
  return (
      <div className="container mx-auto px-6 py-12 bg-[#FAFAFA]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-36 mb-32">
              <ProductCategoryCard name="Headphones" image="/assets/shared/desktop/image-category-thumbnail-headphones.png" path={'/headphones'} />
              <ProductCategoryCard name="Speakers" image="/assets/shared/desktop/image-category-thumbnail-speakers.png" path={'/speakers'} />
              <ProductCategoryCard name="Earphones" image="/assets/shared/desktop/image-category-thumbnail-earphones.png" path={'/earphones'} />
          </div>

          <BringingYouTheBestAudio />
    </div>
  )
}

export default page
