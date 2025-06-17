import Image from "next/image"

const Landing = () => {
  return (
      <section className="bg-black text-white text-center md:text-left relative ">
          <div className="container mx-auto flex items-center h-[calc(100vh-90px)] max-h-[729px]">
              <div className="max-w-md px-6 z-10">
                  <p className="text-white opacity-[49.64%] uppercase tracking-[.5em]">New Product</p>
                  <h2 className="text-[36px] md:text-6xl font-bold my-6 uppercase">XX99 Mark II Headphones</h2>
                  <p className="text-gray-300 mb-10 opacity-75">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                  <button onClick={() => { }} className="bg-[#D87D4A] text-white uppercase px-8 py-4 hover:bg-orange-400 transition-colors">See Product</button>
              </div>
          </div>
          <Image src={'/assets/home/mobile/image-header.jpg'} alt="headphones" className="absolute top-0 left-0 h-full w-full object-cover opacity-40 md:left-1/2 md:-translate-x-1/2 md:opacity-100" fill />
      </section>
  )
}

export default Landing
