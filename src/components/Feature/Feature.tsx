import React from "react";

export default function Feature() {
  return (
    <section className="py-10 bg-gradient-to-r from-fuchsia-600 to-blue-600 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-y-10 md:grid-cols-2 md:gap-x-20">
          <div className="relative grid grid-cols-2 gap-6 mt-10 md:mt-0">
            <div className="overflow-hidden aspect-w-3 aspect-h-5">
              <picture>
                <img
                  className="object-cover object-top origin-top scale-150"
                  src="https://img.freepik.com/free-vector/e-commerce-concept-illustration_1284-5103.jpg?t=st=1722051245~exp=1722054845~hmac=5ec7ddf5d8397657e3d2ca2515a705204311ad317bdbd98bb5ab50cb3d58a5b3&w=1060"
                  alt="Img"
                />
              </picture>
            </div>

            <div className="relative">
              <div className="h-full overflow-hidden aspect-w-3 aspect-h-4">
                <picture>
                  <img
                    className="object-cover scale-150 lg:origin-bottom-right"
                    src="https://img.freepik.com/free-vector/e-learning-isometric-concept_1284-16835.jpg?t=st=1722008306~exp=1722011906~hmac=84c552ce482972d1d6e4ae6df2894bf0a002b014334c8d14bff6a66373dffb50&w=1060"
                    alt=""
                  />
                </picture>
              </div>
            </div>
            <div className="absolute -translate-x-1/2 left-1/2 -top-16">
              <picture>
                <img
                  className="w-32 h-32"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/2/round-text.png"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <div className="flex flex-col items-start xl:px-16">
            <h2 className="text-xl font-bold leading-tight text-black sm:text-2xl lg:text-3xl">
              THE ONLINE COURSE WILL
              <br />
              ALL OF YOUR TROUBLES
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 rounded-md hover:opacity-90 focus:opacity-90 lg:mt-auto bg-blue-700 hover:bg-green-700"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
