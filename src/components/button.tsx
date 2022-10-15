import React, { Children } from 'react'

                

const Button = (props: {children, className, onClick}) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {props.children}
    </button>
  )
}

export default Button