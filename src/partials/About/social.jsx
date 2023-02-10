import React from 'react';

import { FacebookLoginButton, GoogleLoginButton, GithubLoginButton, TwitterLoginButton, AmazonLoginButton, InstagramLoginButton } from "react-social-login-buttons";

function Tutorials() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      
      

      {/*  Page content */}
      <main className="grow">

      <FacebookLoginButton onClick={() => alert("Hello")} />

      <GoogleLoginButton onClick={() => alert("Hello")} />

      <GithubLoginButton onClick={() => alert("Hello")} />

      <TwitterLoginButton onClick={() => alert("Hello")} />

      <AmazonLoginButton onClick={() => alert("Hello")} />

      <InstagramLoginButton onClick={() => alert("Hello")} />

        {/*  Page sections */}
       
        

      </main>

      
      

    </div>
  );
}

export default Tutorials;