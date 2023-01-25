import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image-01.png';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
  };
  return (
    <section style={{height: "100vh"}} className="relative" id="hero">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pt-30 md:pb-16">
            <div className='pt-20'>
            <h3 className="text-5xl md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">
              Get
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> $KLEO</span>  tokens for your browsing history data, on your terms!
            </h3>
            </div>
            <div className='pt-10'>
            <p className="text-xl text-gray-600 text-center">
             You can exchange your browsing data for gigs, deals, rewards and $KLEO tokens. <br/>
             <b>All you have to do is install an extension. </b> 
            </p>
            </div>
            <div className='pt-20'>
            <button onClick={() => handleClickNav("third")} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-7 rounded-full inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
            </svg>
              <span>Tell me How</span>
            </button>
            </div>
          </div>

        </div>

      </div>
    </section>
    
  );
}

export default HeroHome;