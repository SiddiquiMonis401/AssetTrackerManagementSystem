import React, { useState, useEffect } from 'react'

import '../Styles/Dashboard.scss'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from '../Components/Backdrops/Backdrops'
function Dashboard (props) {
  const [openDrawer, setOpenDrawer] = useState(false)
  const handleToggle = () => {
    setOpenDrawer(prevState => !prevState)
  }
  console.log(openDrawer)
  return (
    <>
      <Toolbar handleToggle={handleToggle} />
      <SideDrawer isOpen={openDrawer} handleToggle={handleToggle} />
      {openDrawer && <Backdrop />}
    </>
  )
}

export default Dashboard
