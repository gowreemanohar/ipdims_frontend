import React from 'react'
import CollapsibleNav from '../Components/CollapsibleNav'
import FooterMain from '../Components/FooterMain'
import Dot from '../Components/Dot'
import { Card } from 'flowbite-react'
const Guidelines = () => {
  return (
    <div className='bg-bgblue'>
        <div className="sticky top-0 z-50 shadow drop-shadow-sm">
            <CollapsibleNav/>
        </div>
        
    <div className=" text-lg ">
  <Card className='lg:mx-48 sm:mx-2 drop-shadow-xl  rounded-xl my-16 bg-footerblue lg:p-10'>
  <span className=''>
    <h5 className="drop-shadow-xl mb-4 text-3xl font-semibold text-footerblue dark:text-gray-400 self-center">
      Submission Guidelines
    </h5>
    
    <ul
      role="list"
      className="my-7 space-y-5 p-4"
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
        <span className="drop-shadow-xl text-lg  font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Prospective authors from India are invited to submit manuscripts reporting original, 
            unpublished research and recent developments in the topics related to the conference.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Submissions must include title, abstract, author affiliation with the email address 
            and keywords as per template which is available in the website.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        The paper should not 
            contain page numbers or any special headers or footers.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Regular papers should present
             novel perspectives within the general scope of the conference.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Short papers (Work-in-Progress)
              are an opportunity to present preliminary or interim results.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        The paper length should
               be in 6-8 pages Literature reviews/survey papers will only be considered if they 
               present a new perspective or benefit the field.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        To be published, such papers must
                go beyond a review of the literature to define the field in a new way or highlight 
                exciting new technologies or areas of research.
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
        
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        All submitted papers will be subjected 
                to a “similarity test” by Turnitin Software.
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
        
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Papers achieving a minimal similarity index 
                i.e. less than 15% will be examined, and those are deemed unacceptable will be rejected
                /withdrawn without a formal review.
        </span>
      </li>
    </ul>
   
    </span>
  </Card>
  <Card className='lg:mx-48 sm:mx-2 drop-shadow-xl  rounded-xl my-16 bg-footerblue lg:p-10'>
  <span className=''>
    <h5 className="drop-shadow-xl mb-4 text-3xl font-semibold text-footerblue dark:text-gray-400 self-center">
    Policy on Plagiarism
    </h5>
    
    <ul
      role="list"
      className="my-7 space-y-5 p-4"
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
        <span className="drop-shadow-xl text-lg  font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Authors are requested to kindly refrain from plagiarism in any form. Authors should submit their original and unpublished research work not under consideration for publication everywhere.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        Manuscript found to be plagiarised during any stage of review shall be rejected.
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
        <span className="drop-shadow-xl text-lg font-semibold leading-tight text-gray-500 dark:text-gray-400">
        As per the copyright transfer agreement, authors are deemed to be individually or collectively responsible for the content of the manuscript published by them.
        </span>
      </li>
      
    </ul>
    <a href='https://easychair.org/conferences/?conf=ipdims2022'>
    <button
      type="button"
      to='https://easychair.org/conferences/?conf=ipdims2022'
      href='https://easychair.org/conferences/?conf=ipdims2022'
      className="lg:ml-96 inline-flex justify-center rounded-lg outline-footerblue  ring-2 ring-footerblue  px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-footerblue hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
    Submit Paper

      
    </button>
    </a>
    </span>
  </Card>
</div>
    
        <div className="mt-16 ">
            <FooterMain/>
        </div>
    </div>

  )
}

export default Guidelines