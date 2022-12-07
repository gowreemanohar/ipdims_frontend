import React from 'react'
import { Card } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
const Track1 = () => {
  return (
    <div>
        <div className=" text-lg">
  <Card className='hover:scale-105 hover:shadow-2xl drop-shadow-xl'>
    <h5 className="mb-4 text-3xl font-semibold text-footerblue dark:text-gray-400 self-center">
      Track - 1
    </h5>
    <div className="flex items-center text-gray-900 dark:text-white ">
      <p className="text-xl font-semibold self-center items-center">
        Innovative Product Design
      </p>
      {/* <span className="text-5xl font-extrabold tracking-tight">
        49
      </span> */}
      {/* <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span> */}
    </div>
    <ul
      role="list"
      className="my-7 space-y-5"
    >
      <li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg  font-normal leading-tight text-gray-500 dark:text-gray-400">
        Design Aesthetics
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Ergonomics Design
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        UX/UI Design
        </span>
      </li>
      <li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Human Computer Interaction
        </span>
      </li><li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Computer Aided Design
        </span>
      </li><li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Design for Cost & Sustainability
        </span>
      </li><li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Design Creativity & Optimization
        </span>
      </li><li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className="text-lg font-normal leading-tight text-gray-500 dark:text-gray-400">
        Design for Sustainability
        </span>
      </li>
    </ul>
    <button
      type="button"
      className="inline-flex w-full justify-center rounded-lg outline-black ring-1 ring-footerblue  px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-footerblue hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
    <NavLink to='/#tracks' >
          
        </NavLink>
    
      Select Track
    </button>
  </Card>
</div>
    </div>
  )
}

export default Track1