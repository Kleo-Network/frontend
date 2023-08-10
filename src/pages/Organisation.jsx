import React from 'react';

import Header from '../partials/Header';
import PricingTables from '../partials/PricingTables';
import FeaturesTable from '../partials/FeaturesTable';
import TestimonialsCarousel from '../partials/TestimonialsCarousel';
import Faqs from '../partials/Faqs';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import HeroVideo from '../partials/HeroVideo';
function Organisation() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
      <HeroVideo />
        {/*  Page sections */}
        
        {/* <TestimonialsCarousel /> */}
       

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Organisation;