import React from 'react'
import { Table } from 'flowbite-react'
const TableMain = () => {
  return (
    <div className='mt-16  lg:mx-16 sm:mx-2 '>
    <h2 className='text-4xl text-footerblue font-semibold text-center mb-4'>Registration Fee</h2>
      <Table striped={true} className=''>
  <Table.Head className='text-xl'>
    <Table.HeadCell className='text-lg'>
    Category
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
    Online<br/>
    (Till 10/11/22)
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
    Physical<br/>
    (Till 10/11/22)
    </Table.HeadCell>
    <Table.HeadCell className='text-lg'>
      Late Registration<br/> 
      (from 10/11/22 to 20/11/22)
    </Table.HeadCell>
    {/* <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
    </Table.HeadCell> */}
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="  whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Student
      </Table.Cell>
      <Table.Cell>
      4000 INR 
      </Table.Cell>
      <Table.Cell>
      7000 INR
      </Table.Cell>
      <Table.Cell>
        1000 INR / 25USD per each paper
      </Table.Cell>
      {/* <Table.Cell> */}
        {/* <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a> */}
      {/* </Table.Cell> */}
    </Table.Row>
    <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Academician/ R&D Lab.       </Table.Cell>
      <Table.Cell>
      6000 INR      </Table.Cell>
      <Table.Cell>
      9000 INR      </Table.Cell>
      <Table.Cell>
      1000 INR / 25USD per each paper      </Table.Cell>
      {/* <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell> */}
    </Table.Row>
    <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Industrialist      </Table.Cell>
      <Table.Cell>
      7000 INR      </Table.Cell>
      <Table.Cell>
      10000 INR      </Table.Cell>
      <Table.Cell>
      1000 INR / 25USD per each paper      </Table.Cell>
      {/* <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell> */}
    </Table.Row>
    <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Attendee      </Table.Cell>
      <Table.Cell>
      1000 INR
      </Table.Cell>
      <Table.Cell>
      4000 INR
      </Table.Cell>
      <Table.Cell>
      1000 INR / 25USD per each paper      </Table.Cell>
      {/* <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell> */}
    </Table.Row>
    <Table.Row className="text-lg bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
      Foreign Delegate       </Table.Cell>
      <Table.Cell>
      100$      </Table.Cell>
      <Table.Cell>
      NA      </Table.Cell>
      <Table.Cell>
        1000 INR / 25USD per each paper
      </Table.Cell>
      {/* <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Edit
        </a>
      </Table.Cell> */}
    </Table.Row>
  </Table.Body>
</Table>
    </div>
  )
}

export default TableMain