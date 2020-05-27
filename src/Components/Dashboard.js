import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import '../Styles/Dashboard.scss'
import Toolbar from './Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from '../Components/Backdrops/Backdrops'
import StatisticsCard from './DashboardCompoent/StatisticsCard';

function Dashboard (props) {
  const { loggedIn } = useSelector(state => state.LoggedReducers);
  console.log(loggedIn);

  const [openDrawer, setOpenDrawer] = useState(false)
  const handleToggle = () => {
    setOpenDrawer(prevState => !prevState)
  }
  return (
    <div className="dashboard">
      <Toolbar handleToggle={handleToggle} />
      <SideDrawer isOpen={openDrawer} handleToggle={handleToggle} />
      {openDrawer && <Backdrop />}
      <div style={{marginTop:'75px',zIndex:-1}} className="container-fluid">
          <h1>DASHBOARD</h1>
          <div className="row"> 
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
           <div className="col-lg-3 col-md-6 col-sm-12 mt-5"><StatisticsCard Title={"Assets"} Quanity={10} desc='ViewAll' /></div>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
