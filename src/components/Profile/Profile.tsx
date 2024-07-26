import React from "react";
export default function Profile() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-slate-200 rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5 text-xl">
                EXPERIENCE MENTOR
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <a
              href="/"
              className="inline-flex items-center font-semibold text-base text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 bg-blue-700"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-slate-200 rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5 text-xl">
                FRIENDLY PRICE
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <a
              href="/"
              className="inline-flex items-center font-semibold text-base text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 bg-blue-700"
            >
              Learn more
            </a>
          </div>
        </div>
        <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative p-5 bg-slate-200 rounded-sm">
            <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
              <h6 className="font-semibold leading-5 text-xl">
                QUALITY LEARNING
              </h6>
            </div>
            <p className="mb-2 text-sm text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam.
            </p>
            <a
              href="/"
              className="inline-flex items-center font-semibold text-base text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 bg-blue-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
