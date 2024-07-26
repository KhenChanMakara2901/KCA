import React from "react";

export default function Card() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 mt-20">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
        <div className="md:w-1/3 p-6 rounded-lg border bg-slate-100">
          <h2 className="text-lg font-bold mb-2">HTML/CSS</h2>
          <p className="text-gray-700 mb-4">3 PROJECT FREE BOOK</p>
          <p className="text-4xl font-bold mb-4">
            $80<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Basic</li>
            <li>Expert</li>
            <li>Zero to Hero</li>
            <li>Advance</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue transition duration-200">
            Get Started
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border bg-slate-100">
          <h2 className="text-lg font-bold mb-2">JAVASCRIP/J.QUERY</h2>
          <p className="text-gray-700 mb-4">3 PROJECT FREE BOOK</p>
          <p className="text-4xl font-bold mb-4">
            $100<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Basic</li>
            <li>Expert</li>
            <li>Zero to Hero</li>
            <li>Advance</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue transition duration-200">
            Get Started
          </button>
        </div>
        <div className="md:w-1/3 p-6 rounded-lg border bg-slate-100">
          <h2 className="text-lg font-bold mb-2">NEXT.JS/REACT.JS</h2>
          <p className="text-gray-700 mb-4">3 PROJECT FREE TAILWIND.CSS</p>
          <p className="text-4xl font-bold mb-4">
            $150<span className="text-gray-950 text-lg">/month</span>
          </p>
          <ul className="text-sm text-gray-950">
            <li>Basic</li>
            <li>Expert</li>
            <li>Zero to Hero</li>
            <li>Advance</li>
          </ul>
          <button className="mt-8 py-3 px-6 bg-blue-700 text-white font-bold rounded-full hover:bg-blue-900 focus:outline-none focus:shadow-outline-blue transition duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
