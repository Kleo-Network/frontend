import React, { useState } from 'react';

import DocsImage01 from '../images/docs-image-01.png';
import DocsImage02 from '../images/docs-image-02.png';
import { Link } from 'react-router-dom';

const DocumentationContent = ({step, setStep, browsingTiers, setBrowsingTiers, emptyState})  => {
  return (
    <div className="md:grow">

      <div className="text-lg text-gray-600">
        <h2 className="h2 text-gray-900 mb-4">Requirements</h2>
        <p className="mb-8">
          You can list down exactly what you need from your users 
          in order to make their experience better on your website. 
          <strong className="font-medium text-gray-900"> Don't be greedy, ask for what you really need. </strong>
        </p>

    {step == "personal" && (
      <>
      
      <h3 id="installation" className="h3 text-gray-900 mb-4" style={{ scrollMarginTop: '100px' }}>Personal Information</h3>
        
        <div className="max-w-lg mx-auto mb-5">
                <form>


                <h3 class="mb-4 font-semibold text-gray-900 dark:text-gray-900">Check What you need</h3>
<ul class="mb-5 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="react-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
        </div>
    </li>
   
</ul>
<ul class="mb-5 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="email" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="email" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="country" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="country" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Country</label>
        </div>
    </li>
   
</ul>
<ul class="mb-5 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="age" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="age" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Age</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="kyced" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="kyced" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">KYC completed</label>
        </div>
    </li>
   
</ul>
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="plus" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="plus" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Adult (18+)?</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="Gender" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label for="Gender" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gender</label>
        </div>
    </li>
   
</ul>               
                </form>
               
                
              </div>

        
        <p className="flex items-center text-base px-3 py-4 text-gray-800 bg-blue-100 border border-blue-200 rounded mb-8">
          <svg className="w-4 h-4 fill-current text-blue-500 shrink-0 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm2.629 11.618L8 10.236l-2.629 1.382.5-2.927-2.124-2.073 2.939-.427L8 3.528l1.314 2.663 2.939.427-2.126 2.073.502 2.927z" fill="#338CF5" fillRule="nonzero" />
          </svg>
          <span>We <a className="text-blue-600 hover:underline" href="#0">review (criteria)</a> requested information and make user aware of your trustworthy rapport.</span>
        </p>
        <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button onClick={() => setStep("browsing")} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Next &#62;&#62; Browsing Data</button>
                    </div>
        </div>
      </>
    )}

    {step == "browsing" && (
      <>
      <h3 id="quick" className="mt-5 h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Browsing History</h3>
      {browsingTiers.map((form, index) => (
        
        <div key={index}>
        
        
        <p className="text-lg text-gray-900">
          lookup <code className="text-red-900">{form.keyword}</code> in browsing history, indexed more than <code className="text-red-900">{form.x} times</code>, last <code className="text-red-900">{form.y} days</code> 
        </p>
        
          {browsingTiers.length > 1 && (
            <div style={{ textAlign: "right" }}>
              <button
                tag="a"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={() => {
                  setBrowsingTiers(browsingTiers.filter((el, i) => i !== index));
                }}
              >
                -
              </button>
            </div>
          )}
           
        
          Keyword
          <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id={`keyword_${index}`}
          defaultValue={form.keyword}
          type="text"
          label="Keyword"
          onChange={(e) => {
            const tempState = [...browsingTiers];
            tempState[index]["keyword"] = e.target.value;
            setBrowsingTiers(tempState);
          }}
          labelHidden
          hasIcon="right"
          placeholder="keyword"
        ></input>

          Number of times 
          <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id={`keyword_${index}`}
          defaultValue={form.x}
          type="text"
          label="Keyword"
          onChange={(e) => {
            const tempState = [...browsingTiers];
            tempState[index]["x"] = e.target.value;
            setBrowsingTiers(tempState);
          }}
          labelHidden
          hasIcon="right"
          placeholder="keyword"
        ></input>

          Last number of days
          <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id={`keyword_${index}`}
          defaultValue={form.y}
          type="text"
          label="Keyword"
          onChange={(e) => {
            const tempState = [...browsingTiers];
            tempState[index]["y"] = e.target.value;
            setBrowsingTiers(tempState);
          }}
          labelHidden
          hasIcon="right"
          placeholder="keyword"
        ></input>
      </div>
      ))}

<div style={{ textAlign: "right" }} className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button onClick={() => {
                    const nextState = [...browsingTiers];
                    nextState.push(emptyState);
                    setBrowsingTiers(nextState);
                  }}                 className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  > Add Indexer</button>
                   
                   
                    </div>
        </div>

        <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button onClick={() => setStep("payment")} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Next &#62;&#62; Payment</button>
                    </div>

        </div>

      </>
    )}

    {step == "payment" && (
      <div>
        
      <div className="flex flex-wrap -mx-3 mt-6">
      <div className="w-full px-3">
      $USD per user (Min Cap: 0.02$)
      <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          labelHidden
          hasIcon="right"
          placeholder="Price in USD"
        ></input>
        <div style={{ textAlign: "right" }} className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3 mb-5">
                      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  > Pay </button>
                   
                   
                    </div>
                    </div>
        <button onClick={() => setStep("embed")} className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Next &#62;&#62; Embed Code</button>
      </div>
      </div>
</div>
    )}


    {step == "embed" && (
      <>
        <h3 id="quick" className="mt-5 h3 text-gray-900 mb-8" style={{ scrollMarginTop: '100px' }}>Embed Code</h3>
        <code id="code">          
          &lt;div id="{crypto.randomUUID()}"&gt; <br/>
           &lt;button "" your custom class "" /&gt; 
           <br/>
           &lt;/div&gt;
         </code>
        <h4 className="h4 text-gray-900 mb-4">How to catch data?</h4>
        <p>
          You can easily catch the data by the user, using $(div) options or by using postback message channels from the chrome extension. 
        </p>
        <div className="pt-6">
        <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between sm:items-center">
          <div className="font-medium mb-4 md:mb-0">Did you find this form easy to fill?</div>
          <ul className="inline-flex justify-center -m-2">
            <li className="p-2">
              <a href="#0" title="No, at all">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                  <path d="M11.11 7.029a.334.334 0 00-.395.098c-.006.008-.653.802-2.224 1.23a5.696 5.696 0 01-1.496.212c-.662 0-1.04-.141-1.042-.142a.332.332 0 00-.38.521c.047.058 1.186 1.431 2.75 1.431.234 0 .468-.031.695-.093 1.903-.519 2.273-2.805 2.288-2.903a.333.333 0 00-.197-.354zm7.316 1.436a.335.335 0 00-.393-.106c-.004.002-.422.171-1.158.171-.441 0-.906-.06-1.382-.177-1.58-.388-2.246-1.166-2.252-1.172a.333.333 0 00-.586.27c.018.097.446 2.374 2.36 2.845.207.051.419.077.63.077 1.598 0 2.733-1.44 2.78-1.501a.336.336 0 00.001-.407zM6.666 6.667a.667.667 0 01-.164-1.313c.024-.006 2.395-.64 3.568-2.985a.666.666 0 111.193.596C9.809 5.873 6.949 6.617 6.828 6.647a.678.678 0 01-.163.02zm10.667 0a.672.672 0 01-.161-.02c-.121-.03-2.981-.775-4.435-3.682a.667.667 0 011.193-.597c1.172 2.345 3.543 2.98 3.568 2.985a.668.668 0 01-.165 1.314zM12 19.31c-2.415 0-4.018.281-6 .667-.453.087-1.333 0-1.333-1.334 0-2.666 3.063-6 7.333-6s7.333 3.334 7.333 6c0 1.334-.88 1.422-1.333 1.334-1.982-.386-3.585-.667-6-.667z" fill="#664500" />
                  <path d="M6.667 16.667S8.667 16 12 16s5.333.667 5.333.667S16 14 12 14s-5.333 2.667-5.333 2.667z" fill="#FFF" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="Not really">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                  <circle fill="#F4F7F9" cx="16.333" cy="9" r="3.667" />
                  <circle fill="#F4F7F9" cx="7.667" cy="9" r="3.667" />
                  <path d="M15.406 15.616c-1.842-.445-5.915-.04-7.441 2.937a.249.249 0 00.222.364c.057 0 .114-.02.161-.058 2.056-1.72 4.957-1.72 6.69-1.72 1.09 0 1.691 0 1.691-.472s-.47-.846-1.323-1.051zM7 8.666a1.662 1.662 0 00.25-3.308A3.627 3.627 0 005.8 5.85c-.287.3-.466.704-.466 1.151 0 .92.746 1.667 1.667 1.667zm8.667 0a1.662 1.662 0 00.25-3.308 3.624 3.624 0 00-1.451.491C14.179 6.15 14 6.553 14 7c0 .92.746 1.667 1.667 1.667z" fill="#65471B" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="It was useful">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle fill="#FFCC4D" cx="12" cy="12" r="12" />
                  <path d="M10.667 11.305a.667.667 0 01-.633-.456c-.135-.399-.679-1.544-1.367-1.544-.708 0-1.259 1.218-1.368 1.544a.666.666 0 11-1.264-.422c.083-.251.869-2.456 2.632-2.456 1.764 0 2.549 2.205 2.633 2.456a.666.666 0 01-.633.878zm6.666 0a.666.666 0 01-.632-.456c-.135-.399-.679-1.544-1.368-1.544-.708 0-1.259 1.218-1.368 1.544a.667.667 0 01-1.265-.422c.084-.251.87-2.456 2.633-2.456 1.762 0 2.548 2.205 2.632 2.456a.666.666 0 01-.632.878zm.89 2.489a.334.334 0 00-.423-.02c-.026.02-2.615 1.934-5.8 1.934-3.177 0-5.775-1.914-5.8-1.933a.333.333 0 00-.486.438c.086.143 2.145 3.495 6.286 3.495s6.2-3.352 6.286-3.495a.333.333 0 00-.063-.419z" fill="#664500" />
                  <path d="M14.153 2.631c0 .16.02.315.054.464.284 1.762 2.243 3.621 3.647 4.132 1.11-.404 2.564-1.651 3.265-3.026A12.018 12.018 0 0015.833.626a2.04 2.04 0 00-1.68 2.005zM9.162 19.385a2.213 2.213 0 00-3.95-1.79 2.21 2.21 0 00-1.799-.925c-.827 0-1.54.46-1.92 1.132a12.047 12.047 0 005.379 5.05c1.091-.901 2.087-2.205 2.29-3.467zm13.705-2.29a1.527 1.527 0 00-2.708-.457 1.532 1.532 0 00-2.737 1.24c.205 1.27 1.566 2.597 2.607 3.04a12.03 12.03 0 002.838-3.823z" fill="#FFAC33" />
                  <path d="M22.417 2.18A2.042 2.042 0 0018.715.991a2.042 2.042 0 00-3.647 1.651c.285 1.762 2.243 3.621 3.647 4.132 1.404-.511 3.363-2.37 3.646-4.131a2.02 2.02 0 00.056-.465zM8.139 18.938a2.213 2.213 0 00-4.011-1.287 2.213 2.213 0 00-3.951 1.79c.307 1.908 2.429 3.922 3.95 4.475 1.522-.552 3.644-2.566 3.951-4.475.039-.163.06-.33.06-.503zm15.826-1.521a1.532 1.532 0 00-2.778-.891 1.532 1.532 0 00-2.737 1.24c.213 1.321 1.683 2.716 2.737 3.099 1.054-.383 2.524-1.778 2.736-3.1.027-.112.042-.228.042-.348z" fill="#DD2E44" />
                </svg>
              </a>
            </li>
            <li className="p-2">
              <a href="#0" title="Excellent">
                <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12" fill="#FFCC4D" />
                  <path d="M12 14c-2.415 0-4.018-.281-6-.667-.453-.087-1.333 0-1.333 1.334 0 2.666 3.063 6 7.333 6s7.333-3.334 7.333-6c0-1.334-.88-1.422-1.333-1.334-1.982.386-3.585.667-6 .667z" fill="#664500" />
                  <path d="M6 14.667s2 .666 6 .666 6-.666 6-.666-1.333 2.666-6 2.666-6-2.666-6-2.666z" fill="#FFF" />
                  <path d="M10.455 2.942l-3.028.534L5.867.641a.835.835 0 00-1.554.274l-.497 3.198-3.028.534A.834.834 0 00.576 6.22l2.713 1.288-.498 3.208a.835.835 0 001.417.713l2.341-2.374 3.012 1.43a.834.834 0 001.088-1.154L9.083 6.487l2.11-2.139a.834.834 0 00-.738-1.406zm3.09 0l3.028.534 1.56-2.835a.835.835 0 011.554.274l.496 3.198 3.028.534a.834.834 0 01.212 1.573L20.71 7.508l.499 3.208a.835.835 0 01-1.418.713L17.45 9.055l-3.012 1.43a.834.834 0 01-1.087-1.154l1.565-2.844-2.11-2.139a.834.834 0 01.74-1.406z" fill="#E95F28" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      
      </div>
</>
    )}
        
       
        
      </div>

      {/* Related content */}
     
      {/* Feedback */}


    </div>
  );
}

export default DocumentationContent;