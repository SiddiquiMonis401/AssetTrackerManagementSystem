import React, { useState } from 'react'

//components
import Toolbar from '../Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrops/Backdrops'

function HOCForNavAndSideDrawer (WrappedComponent) {
  return function HOC () {
    const [isOpen, setIsOpen] = useState(false)
    //Click Handler
    const clickHandler = () => {
      setIsOpen(!isOpen)
    }

    return (
      <>
        <Toolbar handleToggle={clickHandler} />
        <SideDrawer isOpen={isOpen} handleToggle={clickHandler} />
        {isOpen && <Backdrop />}
        <WrappedComponent />
      </>
    )
  }
}

export default HOCForNavAndSideDrawer
