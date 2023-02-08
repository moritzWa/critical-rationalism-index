import React from "react"
import { Resources } from "../page-content/data"

export function clsx(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function ResourceTable() {
  return (
    <div className="flex flex-col mt-8">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow-sm ring-1 ring-black ring-opacity-5">
            <table
              className="w-full border-separate"
              style={{ borderSpacing: 0 }}
            >
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="sticky top-[78px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[78px] z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[78px] z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[78px]z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Link
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {Resources.map((resource, rIndex) => (
                  <tr key={resource.name}>
                    <td
                      className={clsx(
                        rIndex !== Resources.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "w-min py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {resource.name}
                    </td>
                    <td
                      className={clsx(
                        rIndex !== Resources.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell"
                      )}
                    >
                      {resource.authors.join(' ')}
                    </td>
                    <td
                      className={clsx(
                        rIndex !== Resources.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-pre-wrap px-3 py-4 text-sm text-gray-500 hidden lg:table-cell"
                      )}
                    >
                      {resource.description}
                    </td>
                    <td
                      className={clsx(
                        rIndex !== Resources.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8"
                      )}
                    >
                      <a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-900 visited:text-indigo-400"
                      >
                        Open<span className="sr-only">, {resource.href}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
