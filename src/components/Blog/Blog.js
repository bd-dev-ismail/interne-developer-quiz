import React from 'react';

import { useState } from "react";
const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};
const Blog = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold badge badge-accent">
                Interview Question
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
              Here some question & answerd for Bouns Marks
            </p>
          </div>
          <div className="space-y-4 text-start">
            <Item title="What is the purpose of React Router?">
              React Router is a JavaScript library used to handle client and
              server-side routing in React applications. It allows the creation
              of single-page web or mobile apps that allows navigation without
              the page refreshing. React Router also gives us access to browser
              history features while maintaining the correct view of the
              application.React Router uses a component-based approach to
              routing.
            </Item>
            <Item title="How does Work Context Api?">
              The Context API is a way to manage state in React applications. It
              provides a way to pass data down through the component tree
              without having to explicitly specify where it is going. This makes
              it easier to keep track of changes to data and makes it easier to
              update components when a change is made.Context API is a React
              built-in, and is a way to manage state that is global to the
              application.
            </Item>
            <Item title="Explain UseRef Hook?">
              The useRefs() hook, also known as the References hook, is used to
              store mutable values that do not require re-rendering when they
              are updated. It is also used to store a reference to a specific
              React element or component, which is useful when we need DOM
              measurements or to directly add methods to the components.
            </Item>
          </div>
        </div>
      </div>
    );
};

export default Blog;

