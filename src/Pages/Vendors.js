import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

//components
import VendorForm from '../Components/VendorForm'
import HOCForNavAndSideDrawer from '../Components/Common/HOCForNavAndSideDrawer'
//styles
import '../Styles/Vendors.scss'

function Vendors (props) {
  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(prevState => !prevState)
  }

  return (
    <>
      <VendorForm show={show} handleShow={handleShow} />
      <div className='vendors_page'>
        <div className='vendors_header'>
          <h1>Vendors</h1>
          <div className='my-auto'>
            <Link to='/dashboard'>
              <button className='btn btn-primary  mx-1'>Home Button</button>
            </Link>
            <button className='btn btn-primary  mx-1' onClick={handleShow}>
              Add New +
            </button>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='list_header mt-2 py-1 '>
            <h6>Name</h6>
            <h6>Assigned</h6>
            <h6>Options</h6>
          </div>
          <div className='row mx-auto'>
            {[
              '1st',
              '2nd',
              '2nd',
              '2nd',
              '2nd',
              '2nd',
              '2nd',
              '2nd',
              '2nd'
            ].map(items => (
              <div className='col-12 my-auto py-4 list_items'>
                {items}
                <p>yes/No</p>
                <p>Icon</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default HOCForNavAndSideDrawer(Vendors)
