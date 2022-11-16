import React from 'react'
import { Card } from 'flowbite-react'
const Announcements = () => {
  return (
    <div className=''>
        <div className="">
        <Card className='hover:scale-105 hover:shadow-2xl drop-shadow-xl '>

    <div className="mb-4 flex items-center justify-center">
      <h5 className="text-xl font-semibold leading-none text-footerblue dark:text-white ">
        Important Announcements
      </h5>
      {/* <a
        href="#"
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        View all
      </a> */}
    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div> */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              Submission Date Extended Till
              </p>
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              30-09-2022
              </p>
            </div>
            
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div> */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              Copyright and paper formats  for "Springer 
              </p>
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              LNME" and "Elsevier Materials Today"  Released
              </p>
              {/* <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              Full length paper
              </p> */}
            </div>
            
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            {/* <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div> */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              IPDIMS Brochure Released
              </p>
              
              {/* <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              Full length paper
              </p> */}
            </div>
            
          </div>
        </li>
      </ul>
    </div>
  </Card>
</div>
    </div>
  )
}

export default Announcements