import React, { useState } from "react";
import Modal from "../utils/Modal";
import Balancer from "react-wrap-balancer";

import HeroImage from "../images/hero-image-01.png";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const [isCookiePopupOpen, setIsCookiePopupOpen] = useState(true);

  const handleClickNav = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative w-full min-h-screen" id="hero">
      {/* {isCookiePopupOpen && (
        <div className="z-10 fixed bottom-4 right-0 left-0 flex justify-center items-center">
          <div className="bg-slate-100 rounded-xl flex justify-between p-10 shadow-xl w-full max-w-screen-lg items-center">
            <div>
              <p className="text-2xl">
                This website seeks your information for giving promotional
                offers and discounts.
              </p>
              <a href="#" className="underline decoration-slate-600">
                Know More
              </a>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-black rounded-xl px-6 py-3 active:scale-95 transform text-white border border-black transition-all hover:bg-white hover:text-black active:bg-white active:text-black"
                onClick={() => setIsCookiePopupOpen(false)}
              >
                Accept
              </button>
              <button className="bg-black rounded-xl px-6 py-3 active:scale-95 transform text-white border border-black transition-all hover:bg-white hover:text-black active:bg-white active:text-black">
                Manage
              </button>
            </div>
          </div>
        </div>
      )} */}

      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-10 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              {" "}
              Performance and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                {" "}
                privacy.{" "}
              </span>
            </h1>
            <h3 className="text-2xl lg:text-[2.5rem] font-medium text-gray-600">
              We are a trustless way to create personalized experiences.{" "}
            </h3>
            <div className="max-w-3xl mx-auto mt-12">
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="https://discord.gg/Qn6ZmecTEw"
                  >
                    Join Waitlist
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => handleClickNav("third")}
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                      />
                    </svg>
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10 my-10 flex w-full">
            <img
              src="/nft-kleo-final.gif"
              className="rounded-3xl shadow-xl w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
