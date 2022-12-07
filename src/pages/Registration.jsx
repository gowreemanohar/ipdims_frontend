// import { Table } from 'flowbite-react'
import React from 'react'
import CollapsibleNav from '../Components/CollapsibleNav'
import FooterMain from '../Components/FooterMain'
import TableMain from '../Components/TableMain'
import BankDetails from '../Components/BankDetails'
import FormComponent from '../Components/FormComponent'
const Registration = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 shadow drop-shadow-lg">
            <CollapsibleNav/>
        </div>
        
        <div className="">
          <TableMain/>
        </div>
        <div className="  lg:m-12 rounded-lg  bg-bgblue p-8">
          <h2 className='text-4xl text-footerblue font-semibold lg:mb-4 self-center text-center'>NOTE<br/></h2>
          <div className="">
            <p className='text-lg p-4'>
           ☑️ Each paper should be registered either by the corresponding author or any of the coauthor of the paper to publish in the conference proceedings.
           <br/>☑️ Payment towards registration should be made through online transfer or Demand Draft. After the payment of Registration fees, authors are requested <br/> &emsp; &nbsp; to fill the online registration form in order to complete the registration.
           <br/>☑️ Registration fee covers the full participation of conference keynote speaks, presentations during all technical sessions and participation certificate.
           <br/>☑️   Registration fee includes institute overhead charges and GST as per actual. There are no additional charges for paper publication.
           <br/>☑️ Participants under physical mode are entitled for conference kit, local tour, refreshments, working lunch, breakfast and gala dinner.
          
            </p>
          </div>
        </div>
        <div className="">
          <BankDetails/>
        </div>
        <div className=' lg:m-16 p-4 bg-bgblue  rounded-lg'>
          <FormComponent/>
        </div>
        <div className="mt-16 mx-2">
            <FooterMain/>
        </div>
    </div>
  )
}

export default Registration