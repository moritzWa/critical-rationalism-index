import React from "react"

type props = {
  name: string
  description: string
  conceptAreas: Array<{ name: string; url?: string }>
}

const Concept = props => {
  return (
    // <>
    //   <h2>{props.name}</h2>
    //   <p>{props.description}</p>
    // </>
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {props.name}
            </h2>
            <p className="mt-4 text-base text-gray-500">
              {props.description}
              {/* <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                customer support
              </a>{" "}
              team. */}
            </p>
          </div>
          <div className="mt-12 lg:col-span-2 lg:mt-0">
            <dl className="space-y-12">
              {props.conceptAreas.map(faq => (
                <div key={faq.name}>
                  <dt className="text-lg font-medium leading-6 text-gray-900">
                    {faq.name}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Concept
