import React from "react"

export default function Testimonial() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative px-3 py-5 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
        <svg
          className="absolute left-0 transform -translate-y-24 top-full translate-x-80 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
          />
        </svg>

        <svg
          className="absolute hidden transform translate-x-1/2 -translate-y-1/2 right-full top-1/2 lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="56409614-3d62-4985-9a10-7ca758a8f4f0"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)"
          />
        </svg>

        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="w-64 h-64 rounded-full xl:h-80 xl:w-80"
              src="https://i.imgur.com/HR2HjRM.png"
              alt="Naval"
            />
          </div>

          <div className="relative lg:ml-10">
            <svg
              className="absolute left-0 text-indigo-200 transform -translate-x-8 -translate-y-24 opacity-50 top-5 h-36 w-36"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 144 144"
              aria-hidden="true"
            >
              <path
                strokeWidth={2}
                d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
              />
            </svg>
            <blockquote className="relative">
              <div className="text-xl font-medium leading-9 text-gray-900">
                <p>
                  I realized [The Beginning of Infinity a seminal books
                  expanding on Critical Rationalism] is the best book that I
                  read in 20 years. ...it's actually the most useful book i've
                  ever read and [...] one of the very few books that I felt made
                  me a lot smarter and it gave me a foundation for evaluating
                  what is true and what is not going forward. It also shattered
                  a lot of beliefs and myths that I had.
                </p>
              </div>
              <footer className="mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 lg:hidden">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://i.imgur.com/HR2HjRM.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-4 lg:ml-0">
                    <div className="text-base font-medium text-gray-900">
                      Naval Ravikant
                    </div>
                    <div className="text-base font-medium text-indigo-600">
                      Founder of AngelList and Spearhead
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
