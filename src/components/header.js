import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import Button from "./button"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="sticky top-0 z-10 flex flex-wrap items-center justify-between p-6 bg-gray-800">
      <div className="flex items-center flex-shrink-0 text-white">
        <Link
          to={`/`}
          className="pr-4 text-xl font-semibold tracking-tight text-white hover:text-indigo-100"
        >
          {siteTitle}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-purple-300 hover:border-white"
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to={`/Resources`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-purple-300"
          >
            Resources
          </Link>
          <Link
            to={`/People`}
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-purple-300"
          >
            People to follow
          </Link>
          <Link
            to="https://criticalrationalism.substack.com/"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-purple-300"
          >
            Newsletter
          </Link>
          <Link
            to="https://www.eventbrite.com/e/the-rat-fest-tickets-387125692367?foo=bar"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-purple-300"
          >
            Rat Fest (6/30-7/2, 2023)
          </Link>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSfJnB_4-cy9PzwNEOdz0nJMGpfdnaxVCfl6Udbr1HFpTmPa3Q/viewform?usp=sf_link"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 hover:text-purple-300"
          >
            CR Forum Waitlist
          </Link>
        </div>
        {/* <a
            // href="https://github.com/moritzWa/critical-rationalism-index"
            target="_blank"
            rel="noreferrer"
            className='pr-4'
          >
          <Button onClick={() => alert("A Substack will be linked here in the coming days.")}>
              Newsletter
          </Button>
          </a> */}
        <div className={isExpanded && "mt-4"}>
          <a
            href="https://github.com/moritzWa/critical-rationalism-index"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Contribute</Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Critiral Rationalism Hub`,
}

export default Header
