import React from 'react';
import { Link } from 'react-router-dom';


import NewsAuthor01 from '../images/news-author-01.jpg';
import NewsAuthor03 from '../images/news-author-03.jpg';


function TutorialsList() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* Page header */}
          <div className="max-w-3xl pb-6 md:pb-6 text-center md:text-left">
            <h1 className="h1">Applications</h1>
          </div>

        

          {/* Articles list */}
          <div className="max-w-sm mx-auto md:max-w-none">

            {/* Articles container */}
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start ">
            <article className="flex flex-col h-full bg-gray-300 px-5 pt-5 pb-5" data-aos="zoom-y-out">
                <header>
                  
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">0 Personal</a>
                      </li>
                    
                      <li className="m-1">
                        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">3 Keywords</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                    <Link to="/blog-post" className="hover:underline">Upwork.com: Gig Workplace.</Link>
                  </h3>
                </header>
                <p className="text-gray-600 grow ">
                  <ul class="list-decimal px-3">
                    <li className='text-gray-900 pb-2'>Has this person in last 3 years indexed for 'react js' from his browsing history more than 800 times? - <span className="text-lime-900 font-bold">Yes</span> <a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a> </li>
                    <li className='text-gray-900 pb-2' > Has this person in last 3 years indexed for 'stackoverflow' from his browsing history more than 1000 times? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 7 days indexed for 'github' from his browsing history? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                  </ul>
                
           
</p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                  <ul>
                  <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">+11 KLEO TOKENS</a>
                  </li>
                  </ul>
                  </div>
                
                </footer>
              </article>

              <article className="flex flex-col h-full bg-gray-300 px-5 pt-5 pb-5" data-aos="zoom-y-out">
                <header>
                  
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">1 Personal</a>
                      </li>
                    
                      <li className="m-1">
                        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 Keywords</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                    <Link to="/blog-post" className="hover:underline">Jump Website</Link>
                  </h3>
                </header>
                <p className="text-gray-600 grow ">
                  <ul class="list-decimal px-3">

                    <li className='text-gray-900 pb-2'>Which country is he from? - <span className="text-lime-900 font-bold">India</span> <a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' > Has this person in last 7 days indexed for 'polygon' from his browsing history? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 7 days indexed for 'ethereum.stackexchange.com' from his browsing history? - <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Has this person in last 7 days indexed for 'github.com' from his browsing history? - <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Does he have more than 150+ github commits? -  <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Is he 18+? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                  </ul>
                
           
</p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                  <ul>
                  <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">+3 KLEO TOKENS</a>
                  </li>
                  </ul>
                  </div>
                
                </footer>
              </article>
            
            
              <article className="flex flex-col h-full bg-gray-300 px-5 pt-5 pb-5" data-aos="zoom-y-out">
                <header>
                  
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">1 Personal</a>
                      </li>
                    
                      <li className="m-1">
                        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">5 Keywords</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                    <Link to="/blog-post" className="hover:underline">News-O-Elections</Link>
                  </h3>
                </header>
                
                <p className="text-gray-600 grow ">
                  <ul class="list-decimal px-3">
                    <li className='text-gray-900 pb-2'>Which country is he from? - <span className="text-lime-900 font-bold">India</span> <a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' > Does he have facebook groups supporting BJP? <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 7 days indexed for 'elections' from his browsing history? <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Index for 'youtube.com Republic TV' Channel? <span className="text-red-900 font-bold"> No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Index for 'youtube.com INDIA TV' Channel? <span className="text-lime-900 font-bold"> Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Is he 18+? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                  </ul>
                
           
</p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                  <ul>
                  <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">+12 KLEO TOKENS</a>
                  </li>
                  </ul>
                  </div>
                
                </footer>
              </article>
            


              <article className="flex flex-col h-full bg-gray-300 px-5 pt-5 pb-5" data-aos="zoom-y-out">
                <header>
                  
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">1 Personal</a>
                      </li>
                    
                      <li className="m-1">
                        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 Keywords</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                    <Link to="/blog-post" className="hover:underline">News-O-Pedia</Link>
                  </h3>
                </header>
                <p className="text-gray-600 grow ">
                  <ul class="list-decimal px-3">
                    <li className='text-gray-900 pb-2'>Which country is he from? - <span className="text-lime-900 font-bold">India</span> <a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' > Has this person in last 7 days indexed for 'polygon' from his browsing history? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 7 days indexed for 'ethereum.stackexchange.com' from his browsing history? - <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Has this person in last 7 days indexed for 'github.com' from his browsing history? - <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Does he have more than 150+ github commits? -  <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2'>Is he 18+? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                  </ul>
                
           
</p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                  <ul>
                  <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">+7 KLEO TOKENS</a>
                  </li>
                  </ul>
                  </div>
                
                </footer>
              </article>
            


              
            


              

              <article className="flex flex-col h-full bg-gray-300 px-5 pt-5 pb-5" data-aos="zoom-y-out">
                <header>
                  
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">1 Personal</a>
                      </li>
                    
                      <li className="m-1">
                        <span className="inline-flex text-center text-gray-800 py-1 px-3 rounded-full bg-white shadow-sm">4 Keywords</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-xl font-bold leading-snug tracking-tight mb-2">
                    <Link to="/blog-post" className="hover:underline">Similar Patients</Link>
                  </h3>
                </header>
                <p className="text-gray-600 grow ">
                  <ul class="list-decimal px-3">
                    <li className='text-gray-900 pb-2'>Has this person in last 3 years indexed for 'slip disk' from his browsing history more than 200 times? - <span className="text-lime-900 font-bold">Yes</span> <a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 3 years indexed for 'backpain' from his browsing history more than 100 times? - <span className="text-lime-900 font-bold">Yes</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                    <li className='text-gray-900 pb-2' >Has this person in last 7 days indexed for 'Orthopedists near more' from his browsing history? - <span className="text-red-900 font-bold">No</span><a href="https://platform-test.polygonid.com/claim-link/b6e170cf-adc1-4219-9351-fa4f402cdd5c" className='font-medium text-blue-600 dark:text-blue-500 hover:underline' target="_blank"> Claim</a></li>
                  </ul>
                
           
</p>
                <footer className="text-sm flex items-center mt-4">
                  <div className="flex shrink-0 mr-3">
                  <ul>
                  <li className="m-1">
                        <a className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out" href="#0">+13 KLEO TOKENS</a>
                  </li>
                  </ul>
                  </div>
                
                </footer>
              </article>
            
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default TutorialsList;