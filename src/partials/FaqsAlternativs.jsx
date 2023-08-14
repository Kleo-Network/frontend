import React from 'react';
import Accordion from '../utils/Accordion';

function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <h2 className="h2">Questions & Answers</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
          <Accordion title="Is $KLEO free to use?">
              Yes. Always will be. 
            </Accordion>
            <Accordion title="How does this protect me?">
              Organizations today use third party cookies to seek information about you, without your consent and you have no idea how this information will be used. <br/> <br/>
              Kleo not only pushes organizations to ask for consent, share intent of use of that data but also rewards it's users with $KLEO tokens.
            </Accordion>
            <Accordion title="Can I control the intent of use of my data?">
              You can take part in KLEO governance where we validate the intent of use of data by organizations. If found inappropriate by the community, the organization ends up paying hefty price. 
            </Accordion>
            <Accordion title="Where is my data stored?">
             Your data is stored in your local computer. The previously shared data is stored on (decentralized storage) arweave with AES encryption. 
            </Accordion>
            <Accordion title="What if users don't have the chrome extension installed?">
              No worries, we will act as a normal cookie popup manager!
            </Accordion>
                                             
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div >
      </div >
    </section >
  );
}

export default Faqs;
