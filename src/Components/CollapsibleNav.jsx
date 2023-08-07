import React from 'react'
// import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand'
// import { Flowbite } from 'flowbite-react'
// import { Flowbite } from 'flowbite-react'
import {Navbar,Dropdown,Avatar} from "flowbite-react"
import { NavLink, Link } from 'react-router-dom'
import ipdimsLogo from '../resources/ipdims_logo.png'
import nitrLogo from '../resources/nitrLogo.png'

const CollapsibleNav = () => {
  return (
    <div className="  sticky top-0 z-50 shadow drop-shadow-sm ">

    <Navbar
    rounded={true}
    className=''
  >
  
    {/* <NavLink to="/" className='hover:no-underline '> */}
    {/* <img src={ipdimsLogo}></img> */}
    <div className="lg:flex    lg:justify-around  lg:align-middle ">
      <img
        src={ipdimsLogo}
        className=" mx-6 h-16 lg:h-24 lg:block hidden"
        alt="Flowbite Logo"
      />
      {/* <span className="self-center whitespace-nowrap text-xl font-semibold  text-footerblue hover:no-underline"> */}
      <NavLink to='/'  className='lg:py-4 lg:hidden    lg:text-5xl  hover:no-underline text-footerblue hover:text-footerblue font-bold '>
        IPDIMS
</NavLink>
<NavLink to='/'  className='ml-4 lg:py-4  lg:block hidden   lg:text-4xl  hover:no-underline text-footerblue hover:text-footerblue font-semibold '>
4<span className='text-xl font-semibold'>th</span> Innovative Product Design and Intelligent Manufacturing Systems <span className='block text-center mt-2 text-xl break-words'>(6th & 7th DEC 2023)</span>
</NavLink>
 <img
        src={nitrLogo}
        className="ml-4 h-16 lg:h-24 lg:block hidden"
        alt="Flowbite Logo"
      />
</div>

      {/* </span> */}
    {/* </NavLink> */}
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

      {/* <a
        href="https://ipdims.in/wp-content/uploads/2022/07/IPDIMS-2022_Brochure.pdf"
        // active={true}
        target="_blank"
        className='lg:hidden lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Brochure
      </a> */}
      <NavLink to='/submission' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}   className='lg:hidden lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
          Manuscript Submission
        </NavLink>
      <NavLink to='/pastProceedings' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}   className='lg:hidden lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
          Past Proceedings
        </NavLink>
        
        <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}   className='lg:hidden lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
          Guidelines
        </NavLink>

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}  className='lg:hidden lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
        Committee

      </NavLink>

      <a
        href="https://easychair.org/conferences/?conf=ipdims2022"
        // active={true}
        className='lg:hidden lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Submission
      </a>

        <NavLink to='/registration' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Payment
        </NavLink>
        
      {/* </Navbar.Link> */}
      {/* <Navbar.Link  > */}
        

      {/* <Navbar.Link href='https://easychair.org/conferences/?conf=ipdims2022' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue'> */}
        {/* Submission */}

      {/* </Navbar.Link  > */}
      {/* <NavLink to='https://easychair.org/conferences/?conf=ipdims2022' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue'>
        Submission

      </NavLink> */}
      
      {/* <a href='/#tracks' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
          Tracks

      </a> */}
      
      
      
      
      {/* </Navbar.Link> */}
      {/* <Navbar.Link href=''  > */}
      {/* <a href='/#footer' className='lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>

        Contact Us
</a> */}
      
      {/* </Navbar.Link> */}
    </Navbar.Collapse>
    
  </Navbar>
  </div>
  )
}

export default CollapsibleNav