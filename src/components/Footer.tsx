
const Footer = () => {
  return (
    <footer className="bg-[#101010] text-white">
        <div className="container mx-auto px-6 md:px-24 py-12 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-24 h-1 bg-[#D87D4A] w-24"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold mb-8 md:mb-0">audiophile</h2>
            <ul className="flex flex-col md:flex-row items-center gap-8 text-[13px] text-white uppercase font-bold tracking-widest">
              <li className="hover:text-[#D87D4A] cursor-pointer transition-colors">HOME</li>
              <li className="hover:text-[#D87D4A] cursor-pointer transition-colors">HEADPHONES</li>
              <li className="hover:text-[#D87D4A] cursor-pointer transition-colors">SPEAKERS</li>
              <li className="hover:text-[#D87D4A] cursor-pointer transition-colors">EARPHONES</li>
            </ul>
          </div>
        <p className="text-[#FFFFFF] opacity-50 md:w-1/2 font-medium text-[15px] text-center md:text-left mb-12">
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="flex md:flex-row flex-col justify-between items-center">
          <p className="text-[#FFFFFF] opacity-50 md:w-1/2 font-medium text-[15px] text-center md:text-left mb-12">Copyright 2021. All Rights Reserved</p>
            <div className="flex gap-4 p-4">
              <a href="#" aria-label="Facebook page" className="text-white hover:text-orange-500 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C0.593 0 0 0.593 0 1.325V22.676C0 23.407 0.593 24 1.325 24H12.82V14.706H9.692V11.084H12.82V8.413C12.82 5.313 14.713 3.625 17.479 3.625C18.804 3.625 19.942 3.724 20.274 3.768V7.008L18.356 7.009C16.852 7.009 16.561 7.724 16.561 8.772V11.085H20.142L19.681 14.707H16.561V24H22.675C23.407 24 24 23.407 24 22.675V1.325C24 0.593 23.407 0 22.675 0Z" /></svg>
              </a>
              <a href="#" aria-label="Twitter page" className="text-white hover:text-orange-500 transition-colors">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.55705C23.117 2.94905 22.168 3.21305 21.172 3.33205C22.189 2.72305 22.97 1.75805 23.337 0.608047C22.386 1.17205 21.332 1.58205 20.21 1.83305C19.313 0.846047 18.032 0.248047 16.616 0.248047C13.437 0.248047 10.998 2.68705 10.998 5.86705C10.998 6.29205 11.044 6.70605 11.134 7.10705C7.294 6.91105 3.866 5.10405 1.582 2.33605C1.12 3.12905 0.85 4.02805 0.85 4.99605C0.85 6.90305 1.85 8.58905 3.328 9.53005C2.476 9.50105 1.678 9.27305 0.965 8.90505V8.96005C0.965 11.722 2.912 13.993 5.619 14.529C5.16 14.659 4.675 14.72 4.172 14.72C3.843 14.72 3.522 14.687 3.209 14.624C3.942 16.924 6.088 18.51 8.617 18.554C6.699 20.013 4.312 20.815 1.76 20.815C1.31 20.815 0.865 20.791 0.428 20.74C2.981 22.386 6.045 23.248 9.32 23.248C16.608 23.248 21.564 17.253 21.564 12.016C21.564 11.834 21.56 11.652 21.552 11.47C22.336 10.922 23.048 10.229 23.636 9.42505C22.889 9.75605 22.08 9.97005 21.233 10.053C22.092 9.52605 22.766 8.65205 23.09 7.61805C22.316 8.04905 21.458 8.35805 20.556 8.52405C20.556 8.52405 24 2.55705 24 2.55705Z" /></svg>
              </a>
              <a href="#" aria-label="Instagram page" className="text-white hover:text-orange-500 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.305 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.305 23.728 23.728 21.305 23.928 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.728 2.695 21.305 0.273 16.948 0.073C15.668 0.014 15.259 0 12 0ZM12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.134 2.381 21.62 3.874 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.134 20.134 21.62 16.85 21.769C15.584 21.827 15.204 21.838 12 21.838C8.796 21.838 8.416 21.827 7.151 21.769C3.866 21.62 2.381 20.134 2.232 16.85C2.174 15.585 2.163 15.206 2.163 12C2.163 8.796 2.174 8.417 2.232 7.152C2.381 3.866 3.866 2.381 7.151 2.232C8.416 2.175 8.796 2.163 12 2.163ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16ZM16.965 5.595C16.965 6.28 16.415 6.83 15.73 6.83C15.045 6.83 14.495 6.28 14.495 5.595C14.495 4.91 15.045 4.36 15.73 4.36C16.415 4.36 16.965 4.91 16.965 5.595Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
