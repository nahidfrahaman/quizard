import Lottie from "lottie-react";
import React from 'react';
import animation from "../assets/animation.json";

 const Header = () => {
  
  

    return (
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <div>
            <Lottie animationData={animation} loop={true}/>
          </div>
        </div>
        <div className="relative flex flex-col items-start justify-center w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
             
            </p>
            <h2 className="mb-5 font-sans text-5xl font-bold tracking-tight text-[#007D7C] sm:text-4xl sm:leading-none">
                Test Your Self And
              <br className="hidden md:block" />
             {' '}
              <span className="inline-block text-deep-purple-accent-400">
                Grow Up
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            A good test tells a story. It can serve not only as verification that software is behaving predictably, but also as documentation for other developers.
            </p>
            <div className="flex items-center">
              <a
                href="/quiz/1"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-[#007D7C] transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Now Test Your Self
              </a>
             
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Header;