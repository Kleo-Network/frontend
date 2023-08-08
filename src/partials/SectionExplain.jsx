'use client'

import { useEffect } from 'react'

// Import Swiper
import Swiper from 'swiper'
import { EffectFade, Pagination } from 'swiper/modules';
import One from '../images/one.png';
import Two from '../images/two.png';
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
Swiper.use([Pagination, EffectFade])

export default function Section06() {

  useEffect(() => {
    const testimonial = new Swiper('.testimonial-carousel', {
      slidesPerView: 1,
      watchSlidesProgress: true,
      effect: 'fade',
      autoplay: true, 
      pagination: {
        el: '.testimonial-carousel-pagination',
        clickable: true,
      },
    })
  }, [])

  return (
    <section className="mt-12 md:mt-20" data-aos-id-6>
      <div className="relative max-w-7xl mx-auto">
        {/* Bg */}
        <div
          className="absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section content */}
            <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end">
              {/* Content */}
              <div className="w-[512px] max-w-full shrink-0 md:order-1">
                {/* Copy */}
                <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="100">
                
                <div className="mb-3">
                      <div className="p-7 flex items-center justify-center font-bold text-teal-600 bg-teal-200 h-11 w-11 rounded-full">2.</div>
                    </div>

                Know how your <i>data</i> is being used?
                </h2>
                <p className="text-lg text-slate-500 mb-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]" data-aos-delay="200">
                  Learn the intent of use of the data that you <b>own.</b> <br/> <br/>
                  When we say index <code>github.com</code> more than <code>10 times</code> in last <code>30 days</code>, it means 
                  if <code>github.com</code> was present in your browsing history more than 10 times in last 30 days. It can be used similarly
                  for other websites / titles as well. This will help organisation to personalise the experience  

                  <br/> <br/> In order to avoid unintended use (ex. targeted manipulation) of such information, the organisation will have to reveal the intent of use of such data and also reward you with $KLEO tokens.  
                </p>
                
              </div>

              {/* Carousel */}
              <div className="w-full max-w-sm md:max-w-none md:mr-8 mt-12 md:mt-0" data-aos="fade-up" data-aos-anchor="[data-aos-id-6]">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 mb-10 -mt-14 -mx-14 bg-slate-100 -z-10" aria-hidden="true" />

                  {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
                  {/* * Custom styles in src/css/additional-styles/theme.scss */}
                  <div className="testimonial-carousel swiper-container max-w-sm mx-auto sm:max-w-none">
                    <div className="swiper-wrapper">
                      {/* Card #1 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0">
                          <img src={One}  className="md:max-w-none" width={384} height={180} alt="Testiomonial 01" />
                        </div>
                     
                      </div>

                      {/* Card #2 */}
                      <div className="swiper-slide flex flex-col h-auto shadow-2xl text-left">
                        <div className="relative after:absolute after:inset-0">
                          <img src={Two} className="md:max-w-none" width={384} height={180} alt="Testiomonial 02" />
                        </div>
                      
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <div className="mt-4">
                    <div className="testimonial-carousel-pagination text-center" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}