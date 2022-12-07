import React from 'react'
import { Footer } from 'flowbite-react'
const FooterMain = () => {
  return (
    <div>
     <Footer bgDark={true}>
  <div className="w-full bg-footerblue text-white">
    <div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4 text-white">
      <div>
        <Footer.Title title="Venue" className='text-white' />
        <Footer.LinkGroup col={true}>
        <Footer.Link className='text-white'>
            Industrial Design Department,
          </Footer.Link>
          <Footer.Link  className='text-white'>
            National Institute Of Technology, Rourkela
          </Footer.Link>
          <Footer.Link  className='text-white'>
            Pin code: 769008
          </Footer.Link>
          
          <Footer.Link  className='text-white'>
            Rourkela , Odisha
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Contact Us " className='text-white' />
        <Footer.LinkGroup col={true}>
          <Footer.Link  className='text-white'>
          Phone: 0661 246 2855/2514
          </Footer.Link>
          <Footer.Link  className='text-white'>
          Email: icipdims@gmail.com
          </Footer.Link>
          {/* <Footer.Link href="#" className='text-white'>
          Department of Mechanical Engineering
          </Footer.Link>
          <Footer.Link href="#" className='text-white'>
          National Institute of Technology, Rourkela
          </Footer.Link> */}
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Program Convenor"  className='text-white'/>
        <Footer.LinkGroup col={true}>
          {/* <Footer.Link href="#" className='text-white'>
          Program Convenor
          </Footer.Link> */}
          <Footer.Link  className='text-white'>
          Prof. BBVL Deepak
          </Footer.Link>
          <Footer.Link  className='text-white'>
          Department of Mechanical Engineering
          </Footer.Link>
          <Footer.Link  className='text-white'>
          National Institute of Technology, Rourkela
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
      <div>
        <Footer.Title title="Program Chairman"  className='text-white'/>
        <Footer.LinkGroup col={true}>
          {/* <Footer.Link href="#" className='text-white'>
          Program Convenor
          </Footer.Link> */}
          <Footer.Link  className='text-white'>
          Prof. D.R.K Parhi
          </Footer.Link>
          <Footer.Link  className='text-white'>
          Department of Mechanical Engineering
          </Footer.Link>
          <Footer.Link  className='text-white'>
          National Institute of Technology, Rourkela
          </Footer.Link>
        </Footer.LinkGroup>
      </div>
     
    </div>
    <div className="w-full bg-footerblue text-white  py-6 px-4 sm:flex sm:items-center sm:justify-center">
      <Footer.Copyright
        href="#"
        by="IPDIMS™"
        year={2022}
        className='text-white'
      />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        {/* <Footer.Icon
          href="#"
          icon={BsFacebook}
        />
        <Footer.Icon
          href="#"
          icon={BsInstagram}
        />
        <Footer.Icon
          href="#"
          icon={BsTwitter}
        />
        <Footer.Icon
          href="#"
          icon={BsGithub}
        />
        <Footer.Icon
          href="#"
          icon={BsDribbble}
        /> */}
      </div>
    </div>
  </div>
</Footer>
    </div>
  )
}

export default FooterMain