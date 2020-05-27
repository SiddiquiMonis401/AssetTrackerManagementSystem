import React from 'react'
import * as yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

//styles
import '../Styles/Vendors.scss'

function VendorForm ({ show, handleShow }) {
  let formContainerClass = 'vendor_form'
  if (show) {
    formContainerClass = 'show_form'
  }
  //formik Props Initializations...
  const formikProps = {
    initialValues: {
      name: '',
      location: '',
      email: '',
      CompanyName: ''
    },
    validationSchema: yup.object({
      vendorname: yup.string().required('is req'),
      email: yup
        .string()
        .email()
        .required('please enter the email of the vendor')
    }),
    onSubmit (value, { setSubmitting }) {
      console.log(value)
    }
  }

  return (
    <div>
      <div className={formContainerClass}>
        <div className='form_container'>
          <div className='container_header'>
            <h3>AddNew Vendor</h3>
            <button id='cncl_button' onClick={handleShow}>
              Cancel
            </button>
          </div>
          <div className='form container-fluid'>
            <Formik  {...formikProps}>
              <Form className="add_form row mt-5">
                <div className="col-6">

                <div className="form-group">

                <Field className="form-control  mx-4 my-4 w-75" name='name' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='name'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                />
                </div>
                <div>

                <Field className="form-control  mx-4 my-4 w-75" name='location' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='location'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                />
                </div>
                <div>

                <Field className="form-control  mx-4 my-4 w-75" name='email' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='email'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                  />
                </div>
                <div>
                <Field className="form-control  mx-4 my-4 w-75" name='CompanyName' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='CompanyName'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                  />
                  </div>
                  </div>
                  <div className="col-6">

                <div className="form-group">

                <Field className="form-control  mx-4 my-4 w-75" name='name' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='name'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                />
                </div>
                <div>

                <Field className="form-control  mx-4 my-4 w-75" name='location' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='location'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                />
                </div>
                <div>

                <Field className="form-control  mx-4 my-4 w-75" name='email' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='email'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                  />
                </div>
                <div>
                <Field className="form-control  mx-4 my-4 w-75" name='CompanyName' placeholder='Enter the name of the vendor' />
                <ErrorMessage
                  name='CompanyName'
                  render={msg => <small style={{ color: 'red' }}>{msg}</small>}
                  />
                  </div>
                  </div>
                  <div className="col-12 d-flex justify-content-center align-items-center">

                  <button  className="btn btn-primary w-50" type="submit" >Add</button>
                  </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorForm
