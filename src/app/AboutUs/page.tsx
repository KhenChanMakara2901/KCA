import React from "react";

export default function page() {
  return (
    <div className="py-10 bg-slate-200 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">
            ABOUT US
          </h2>
        </div>

        <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1"
              src="https://img.freepik.com/free-photo/city-committed-education-collage-concept_23-2150062195.jpg?t=st=1722051381~exp=1722054981~hmac=54d5ffb1b8ce609f72739db09d9514563d11bb5dbffb6de370df76135a5c140c&w=1800"
              alt="img"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Join as a team
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="rotate-1"
              src="https://img.freepik.com/free-vector/online-education-concept_52683-8290.jpg?t=st=1722051539~exp=1722055139~hmac=dd1eed493638ef8fed5dcceafa9084ca87ffce7e76fb9b0827c4d5bb2f329aad&w=1060"
              alt="img"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Work from anywhere
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>

          <div className="md:px-4 lg:px-10">
            <img
              className="-rotate-1"
              src="https://img.freepik.com/free-vector/isometric-neural-network-programmer-composition-with-human-characters-making-artificial-brain-with-book-scheme-icons-vector-illustration_1284-81059.jpg?t=st=1722051630~exp=1722055230~hmac=c6f52636d6e2a2bcd4618d5f5e62f7db306297dd0baf648d90136bd2a185a9d1&w=1060"
              alt="img"
            />
            <h3 className="mt-8 text-xl font-semibold leading-tight text-black">
              Get success
            </h3>
            <p className="mt-4 text-base text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
