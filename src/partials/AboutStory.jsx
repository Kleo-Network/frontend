import React from 'react';

import AboutImage from './../../public/netflix-social-delimma.jpeg';
import AboutLogo from '../images/about-logo.png';

function AboutStory() {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          <div className="max-w-3xl mx-auto">
            <h3 className="h3 mb-3">What is this <i>data</i>?</h3>
            <p className="text-lg text-gray-600 mb-8">
              We use browsing history to learn social behaviour of an individual. 
              For example, if you are a software developer then you are most likely to visit websites such as github.com, stackoverflow.com, aws.amazon.com etc.  
            </p>
            <p className="text-lg text-gray-600 mb-8">
            <b>WE DO NOT SHARE ENTIRE BROWSING HISTORY</b> but a boolean yes or no, based on zero knowledge computation that takes place on your device. The intent of use of such a data is recorded on a optimistic oracle against staked $KLEO tokens
            </p>
          </div>

          <div className="sm:flex">
            <figure className="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
              <img className="grow self-start rounded" src={AboutImage} width="435" height="426" alt="About us 02" />
            </figure>
            <div className="sm:ml-8 lg:ml-16">
              <h3 className="h3 mb-2">Cost of this data?</h3>
              <p className="text-lg text-gray-600 mb-8">
               Addiction, Manipulation and monopolising behaviour from big tech firms is seen with 
               data created by users', while filling the pockets of few. <b> We give the control of your data back to you.</b>
              </p>
              <div className="flex  mb-8">
                <img className="rounded-full self-start shrink-0 shadow-lg mr-4" src={AboutLogo} width="40" height="40" alt="Logo" />
                <div>
                  <blockquote className="text-gray-600 italic">
                    “There are only two industries that call their customers “users”: illegal drugs and software.“
                  </blockquote>
                  <div className="text-sm font-medium text-gray-600 mt-2">
                    <cite className="text-gray-900 not-italic">Edward Tufte</cite> · <a className="text-blue-600" href="#0">New York Times</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        

        </div>
      </div>
    </section>
  );
}

export default AboutStory;