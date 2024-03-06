"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Critical Rationalism Hub
            </span>
          </div>
        </Link>

        <div className="md:hidden flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isExpanded ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/resources"
                onClick={() => toggleExpansion(!isExpanded)}
              >
                <div className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Resources
                </div>
              </Link>
            </li>
            <li>
              <Link href="/people" onClick={() => toggleExpansion(!isExpanded)}>
                <div className="py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  People to follow
                </div>
              </Link>
            </li>
            <li>
              <div className={isExpanded ? "mt-4" : undefined}>
                <Link
                  href="https://criticalrationalism.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button>Subscribe to Newsletter</Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
