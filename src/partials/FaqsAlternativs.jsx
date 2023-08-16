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
          <Accordion title="What if the user has not installed the extension?">
             No issues. The popup would look like a GDPR compliant cookie popup. There isn't a downside for an organisation to install KLEO.
            </Accordion>
            <Accordion title="Do you give grants to promote KLEO in our communities?">
              Yes. Right now we are doing giveaway schwags, early organisations will be airdropped $KLEO tokens on mainnet launch. 
            </Accordion>
            <Accordion title="Do you offer referral bonus on using $KLEO on your site?">
               Yes, we give credits worth $200 $KLEO. These can be periodically sold to KLEO team. 
            </Accordion>                    
            <span className="block border-t border-gray-200" aria-hidden="true"></span>
          </ul >

        </div >
      </div >
    </section >
  );
}

export default Faqs;
