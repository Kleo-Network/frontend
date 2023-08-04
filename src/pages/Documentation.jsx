import React, { useState } from 'react';

import Header from '../partials/Header';
import DocumentationContent from '../partials/DocumentationContent';
import Footer from '../partials/Footer';
import { DocumentationOptions, DocumentationOptionsText, BrowserHistoryDefault } from '../utils/constants';

const Documentation = () => {
  const [sidebarNavOpen, setSidebarNavOpen] = useState(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState(true);
  const [active, setActive] = useState(DocumentationOptions.BROWSING);
  const browsingHistory = {
    tierName: 'Developer related cookies',
    lookups: BrowserHistoryDefault
  };
  const [browsingTiers, setBrowsingTiers] = useState([browsingHistory]);
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />
   
      {/*  Page content */}
      <main className="grow">

        {JSON.stringify(browsingTiers)}

        <section>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-10 pb-10 md:pt-10 md:pb-10">

              {/* Main content */}
              <div className="md:flex md:justify-between" data-sticky-container>

                {/* Sidebar */}
                <aside className="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:shrink-0">
                  <div data-sticky data-margin-top="100" data-sticky-for="768" data-sticky-wrap>
                  <div className="flex flex-wrap pb-5">
                        <div className="w-full">
                          <span className="block text-lg"><b>Request Information</b></span>
                      </div>
                    </div>

                    <button className="flex items-center justify-between text-lg font-medium text-gray-900 w-full my-4 md:hidden" onClick={(e) => { e.preventDefault(); setSidebarNavOpen(!sidebarNavOpen); }}>
                      <span>Docs navigation</span>
                      <svg className="w-3 h-3 fill-current text-blue-600 shrink-0 ml-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${sidebarNavOpen && '!rotate-180'}`} />
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${sidebarNavOpen && '!rotate-180'}`} />
                      </svg>
                    </button>

                    
                    {/* Docs nav */}
                    <nav className={`md:block ${!sidebarNavOpen && 'hidden'}`}>
                      <ul className="font-medium -my-2">
                        <li className="py-2" onClick={()=>setActive(DocumentationOptions.BROWSING)}>
                          <a
                            className="flex items-center hover:underline"
                            href="#0"
                            
                            aria-expanded={sidebarLinkOpen}
                          >
                            <div className="flex items-center">
                              <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 3.294L1.4 1.035C1.1.847.7.941.4 1.13c-.2.189-.4.471-.4.753v10.353c0 .377.2.753.6.847L7 15.718V3.294zM15.6 1.13c-.3-.189-.6-.189-.9-.095L9 3.295v12.423l6.4-2.542c.4-.188.6-.47.6-.847V1.882c0-.282-.2-.564-.4-.753z" />
                              </svg>
                              <span class={active == DocumentationOptions.BROWSING ? "font-medium text-gray-900" : "font-medium text-gray-500"}>{DocumentationOptionsText.BROWSING}</span>
                            </div>
                            <svg className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                            </svg>
                          </a>
                          {/* 2nd level */}
                          {active == DocumentationOptions.BROWSING  && (<ul
                            className={`font-normal -mb-1 mt-1 ml-2 pl-5 border-l border-gray-300 ${!sidebarLinkOpen && 'hidden'}`}
                          >
                            {browsingTiers.map((form, index) => (
                              <li key={index} className="py-1">
                             
                              <a className="text-gray-600 hover:underline">Index {form.tierName}</a>
                            </li>
                            ))}
                            
                          </ul>)
                          }
                          
                        </li>

                          {/* Nav for COOKIE_MANAGER */}
                        <li className="py-2"  onClick={()=>setActive(DocumentationOptions.COOKIE_MANAGER)}>
                          <a className="flex items-center hover:underline" href="#cookieManager">
                            <div className="flex items-center grow">
                            <svg className="w-5 h-5 fill-current text-blue-600 mr-3 shrink-0" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                              <path d="M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"/>
                            </svg>

                              <span class={active == DocumentationOptions.COOKIE_MANAGER ? "font-medium text-gray-900" : "font-medium text-gray-500"}>{DocumentationOptionsText.COOKIE_MANAGER}</span>
                            </div>
                          </a>
                        </li>

                          {/* Nav for Payment */}
                        <li className="py-2" onClick={()=>setActive(DocumentationOptions.PAYMENT)}>
                          <a className="flex items-center hover:underline" href="#introduction">
                            <div className="flex items-center grow">
                            <svg className="w-5 h-5 fill-current text-blue-600 mr-3 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
  <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
  <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
</svg>

                              <span class={active == DocumentationOptions.PAYMENT ? "font-medium text-gray-900" : "font-medium text-gray-500"}>{DocumentationOptionsText.PAYMENT}</span>
                            </div>
                          </a>
                        </li>
                       
                         {/* Nav for Embed */}
                        <li className="py-2">
                            <div className="flex items-center grow">
                              <svg className="w-4 h-4 fill-current text-blue-600 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9H1a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v7a1 1 0 01-1 1zM6 16H1a1 1 0 01-1-1v-3a1 1 0 011-1h5a1 1 0 011 1v3a1 1 0 01-1 1zM15 6h-5a1 1 0 01-1-1V1a1 1 0 011-1h5a1 1 0 011 1v4a1 1 0 01-1 1zM15 16h-5a1 1 0 01-1-1V9a1 1 0 011-1h5a1 1 0 011 1v6a1 1 0 01-1 1z" />
                              </svg>
                              <span class={active == DocumentationOptions.EMBED ? "font-medium text-gray-900" : "font-medium text-gray-500"}>{DocumentationOptionsText.EMBED}</span>
                            </div>
                        </li>
                        
                        
                      </ul>
                    </nav>

                  </div>
                </aside>

                {/* Page container */}
                <DocumentationContent emptyState={browsingHistory} key={1} step={active} setStep={setActive} browsingTiers={browsingTiers} setBrowsingTiers={setBrowsingTiers}  />

              </div>

            </div>
          </div>
        </section>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Documentation;