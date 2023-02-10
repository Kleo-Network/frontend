import React from 'react';

import TutorialsList from '../TutorialsList';

function Tutorials() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      
      

      {/*  Page content */}
      <main className="grow">

        {/*  Page sections */}
        <TutorialsList />
        

      </main>

      
      

    </div>
  );
}

export default Tutorials;