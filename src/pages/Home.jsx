import React from 'react'
import CollapsibleNav from '../Components/CollapsibleNav'
// import NavbarMain from '../Components/Navbar'
import HeroCarousel from '../Components/HeroCarousel'
import ImportantDates from '../Components/Dates'
// import SidebarMain from '../Components/SidebarMain'
import Body from '../Components/Body'
import Announcements from '../Components/Announcements'
import PastIpdims from '../Components/PastIpdims'
import Host from '../Components/Host'
import Track1 from '../Components/Track1'
import Track2 from '../Components/Track2'
import Track3 from '../Components/Track3'
import FooterMain from '../Components/FooterMain'
const Home = () => {
  return (
    <div className=" bg-bgblue ">
      <div className="sticky top-0 z-50 shadow drop-shadow-sm">
        <CollapsibleNav/>
        
      </div>
      <div className=" my-2 ">
        <HeroCarousel/>
        <div className="lg:mx-2 lg:my-2 lg:flex mx-2 ">
        <div className=" lg:w-1/3   my-2 ">
            <PastIpdims />
          </div>
          
          <div className="lg:mx-4  lg:w-1/3  my-2">
            <ImportantDates />
          </div>
          <div className="  lg:w-1/3 lg:my-0 my-2">
            <Announcements/>
          </div>
          
          </div>
          <div className="mx-2">
            <Body/>
          </div>
          <div id='tracks' className="mx-2 my-3">
            <Host/>
          </div>
          <div  className=' lg:flex mx-2 my-2' >
            <div className='lg:w-1/3 my-1'>
              <Track1/>
            </div>
            <div className='lg:w-1/3 my-1 lg:my-0 lg:mx-4 '>
              <Track2/>
            </div>
            <div className='lg:w-1/3 my-1'>
              <Track3/>
            </div>
          </div>
          <div id='footer' className="mt-16 mx-2">
            <FooterMain/>
          </div>

      </div>
      
    
    </div>
  )
}

export default Home