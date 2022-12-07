import React from 'react'
import CollapsibleNav from '../Components/CollapsibleNav'
import FooterMain from '../Components/FooterMain'
const Submission = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 shadow drop-shadow-sm">
            <CollapsibleNav/>
        </div>
        <div className="mt-16 mx-2">
            <FooterMain/>
        </div>
      </div>
  )
}

export default Submission