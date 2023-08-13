import React from 'react';

import Header from '../partials/Header';
import OGSpeaks from '../partials/Organisation/OGSpeaks';
import Footer from '../partials/Footer';
import HeroVideo from '../partials/HeroVideo';
import Stats from '../partials/Stats';
import Process from '../partials/Process';
import CtaAlternative from '../partials/CtaAlternative';
import FaqsAlternative from '../partials/FaqsAlternativs';
function Organisation() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
<HeroVideo/>
      {/*  Page content */}
      <main className="grow">
      <OGSpeaks/>
     

      <Process />
      
        {/*  Page sections */}
        
        {/* <TestimonialsCarousel /> */}
       
     
      </main>
      <FaqsAlternative/>
      <CtaAlternative/>
      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Organisation;