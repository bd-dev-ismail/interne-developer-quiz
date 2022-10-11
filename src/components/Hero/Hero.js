import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
      <div className="container mx-auto">
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs custom-text font-semibold uppercase badge badge-accent">
                    Quiz 2022
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight custom-text sm:text-4xl sm:leading-none">
                  First, solve the problem.
                  <br className="hidden md:block" />
                  Then,
                  <span className="inline-block text-deep-purple-accent-400">
                    write the code
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand.Experience
                  is the name everyone gives to their mistakes.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:flex-row">
                <Link
                  to="/statistics"
                  className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 btn btn-accent"
                >
                  Show Chart
                </Link>
                <Link
                  to="/blog"
                  aria-label=""
                  className="inline-flex items-center font-semibold btn btn-info text-white w-full transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0  h-12"
                >
                  Our Blogs
                </Link>
              </div>
            </div>
          </div>
          <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-[38rem] h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Hero;