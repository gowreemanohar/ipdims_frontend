import React from 'react'
// import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand'
// import { Flowbite } from 'flowbite-react'
// import { Flowbite } from 'flowbite-react'
import {Navbar,Dropdown,Avatar} from "flowbite-react"
import { NavLink, Link } from 'react-router-dom'

const CollapsibleNav = () => {
  return (
    <div ><Navbar
    rounded={true}
    className='bg-blue-500'
  >
  
    <NavLink to="/" className='hover:no-underline '>
      {/* <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="lg:ml-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      /> */}
      <span className="self-center whitespace-nowrap text-xl font-semibold  text-footerblue hover:no-underline">
      <NavLink to='/'  className='lg:ml-12 lg:mr-96 lg:text-2xl hover:no-underline text-footerblue hover:text-footerblue font-bold '>
        IPDIMS
      </NavLink>
      </span>
    </NavLink>
    <div className="flex md:order-2  md:mr-2 lg:ml-16 ">
    {/* <div className=""
      <Dropdown
        arrowIcon={false}
        inline={true}
        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
        className='sm:mx-8'
      >
        <Dropdown.Header>
          <span className="block text-sm">
            Manohar Bandla
          </span>
          <span className="block truncate text-sm font-medium">
            name@email.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
          Submissions
        </Dropdown.Item>
        <Dropdown.Item>
          Notifications
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          Sign out
        </Dropdown.Item>
      </Dropdown>
      </div> */}
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      {/* <Navbar.Link
        href="/"
        active={true}
      >
        Home
      </Navbar.Link> */}
      {/* <Navbar.Link  > */}
        <NavLink to='/registration' activeClassName='selected'
         className={isActive =>
     (!isActive ? "rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue" : " lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Registration
        </NavLink>
      {/* </Navbar.Link> */}
      {/* <Navbar.Link  > */}
        <NavLink to='/guidelines' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue'>
          Guidelines
        </NavLink>

      {/* <Navbar.Link href='https://easychair.org/conferences/?conf=ipdims2022' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue'> */}
        {/* Submission */}

      {/* </Navbar.Link  > */}
      {/* <NavLink to='https://easychair.org/conferences/?conf=ipdims2022' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue'>
        Submission

      </NavLink> */}
      <a href='/#tracks' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
          Tracks

      </a>
      <a
        href="https://easychair.org/conferences/?conf=ipdims2022"
        // active={true}
        className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Submission
      </a>
      <NavLink to='/committee' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
        Committee

      </NavLink>
      <a
        href="https://ipdims.in/wp-content/uploads/2022/07/IPDIMS-2022_Brochure.pdf"
        // active={true}
        className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Brochure
      </a>
      
      {/* </Navbar.Link> */}
      {/* <Navbar.Link href=''  > */}
      <a href='#footer' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>

        Contact Us
</a>
      
      {/* </Navbar.Link> */}
    </Navbar.Collapse>
  </Navbar></div>
  )
}

export default CollapsibleNav