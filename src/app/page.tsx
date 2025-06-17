'use client'

import BringingYouTheBestAudio from '@/components/Home/BringingYouTheBestAudio'
import Landing from '@/components/Home/Landing'
import ProductCategoryCard from '@/components/Home/ProductCategoryCard';
import YXEarPhones from '@/components/Home/YXEarPhones'
import ZXNineSpeaker from '@/components/Home/ZXNineSpeaker'
import ZX7SpeakerShowcase from '@/components/Home/ZXSpeakers';


const page = () => {
  return (
    <div className="font-sans antialiased text-gray-800 bg-[#FAFAFA]">
      < Landing />

      <section className="py-20 px-6 md:px-24 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCategoryCard name="Headphones" image="/assets/shared/desktop/image-category-thumbnail-headphones.png" path={'/headphones'} />
          <ProductCategoryCard name="Speakers" image="/assets/shared/desktop/image-category-thumbnail-speakers.png" path={'/speakers'} />
          <ProductCategoryCard name="Earphones" image="/assets/shared/desktop/image-category-thumbnail-earphones.png" path={'/earphones'} />
        </div>
      </section>

      <section className="px-6 md:px-24 container mx-auto pb-20 space-y-8">
        <ZXNineSpeaker />
        <ZX7SpeakerShowcase />
        <YXEarPhones />
      </section>

      <BringingYouTheBestAudio />
    </div>
  )
}

export default page

