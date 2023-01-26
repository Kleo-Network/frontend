import React from 'react';
import { Link } from 'react-router-dom';

import NewsImage01 from '../images/news-01.jpg';
import NewsImage02 from '../images/news-02.jpg';
import NewsImage03 from '../images/news-03.jpg';
import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor02 from '../images/news-author-02.jpg';
import Works from "../images/transparency.png"

function News() {
  return (
    <section>
     


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2">Transparency and Privacy are extremely important to us!</h2>
            <br/>
            <p className="text-xl text-gray-800 text-left">➼ We use smart contracts, so everything is transparent.</p> <br/>

            <p className="text-xl text-gray-800 text-left">➼ For computations, your data remains under your scrutiny. You can host it anywhere!</p> 

            <img src={Works} />
          </div>

          {/* Categories */}
          

          {/* Articles list */}
        

        </div>
      </div>
    </section>
  );
}

export default News;
