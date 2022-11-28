import React from "react"
import { People } from "../page-content/data"

export function clsx(...classes) {
  return classes.filter(Boolean).join(" ")
}

const PeopleArray = Object.values(People).map(e => e)

export default function PeopleTable() {
  return (
    <div className="flex flex-col mt-8">
      <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle">
          <div className="shadow-sm ring-1 ring-black ring-opacity-5">
            <table
              className="min-w-full border-separate"
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
                    Bio
                  </th>
                  {/* <th
                  scope="col"
                  className="sticky top-[78px] z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                >
                  Description
                </th> */}
                  {/* <th
                  scope="col"
                  className="sticky top-[78px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                >
                  Link
                </th> */}
                  <th
                    scope="col"
                    className="sticky top-[78px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Website</span>
                  </th>
                  <th
                    scope="col"
                    className="sticky top-[78px] z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Twitter</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {PeopleArray.map((person, pIndex) => (
                  <tr key={person.name}>
                    <td
                      className={clsx(
                        pIndex !== PeopleArray.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      )}
                    >
                      {person.name} {person.died && " † "}
                    </td>
                    {/* <td
                    className={clsx(
                      pIndex !== PeopleArray.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell'
                    )}
                  >
                    {person.authors}
                  </td> */}
                    <td
                      className={clsx(
                        pIndex !== PeopleArray.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "min-w-1/4 whitespace-pre-wrap px-3 py-4 text-sm text-gray-500 hidden sm:table-cell" //lg:table-cell
                      )}
                    >
                      {person.description}
                    </td>
                    {/* <td
                    className={clsx(
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                    )}
                  >
                    {person.href}
                  </td> */}
                    <td
                      className={clsx(
                        pIndex !== PeopleArray.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8"
                      )}
                    >
                      {person.websiteURL && (
                        <a
                          href={person.websiteURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900 visited:text-indigo-400"
                        >
                          Website
                          <span className="sr-only">, {person.websiteURL}</span>
                        </a>
                      )}
                    </td>
                    <td
                      className={clsx(
                        pIndex !== PeopleArray.length - 1
                          ? "border-b border-gray-200"
                          : "",
                        "relative whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium sm:pr-6 lg:pr-8"
                      )}
                    >
                      {person.twitterURL && (
                        <a
                          href={person.twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-900 visited:text-indigo-400"
                        >
                          Twitter
                          <span className="sr-only">, {person.twitterURL}</span>
                        </a>
                      )}
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
