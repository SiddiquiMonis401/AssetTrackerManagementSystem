import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import LeftSection from '../Common/LeftSection'
import RightSection from '../Common/RightSection'
import LinkWithMessage from '../Common/LinkWithMessage'

function Signup (props) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <LeftSection />
        </div>
        <div className='col-6 d-flex align-items-center justify-content-center'>
          <RightSection title='SignUp' withLogo={true}>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                confirmpassword: ''
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .max(20, 'Name should not be more than 20 character long')
                  .min(3, 'Name should be 3 character long!'),
                email: Yup.string()
                  .email()
                  .required('Please enter the email'),
                password: Yup.string().required('password is required'),
                confirmpassword: Yup.string().oneOf(
                  [Yup.ref('password')],
                  'password must match!'
                )
              })}
              onSubmit={(value, { setSubmitting }) => {
                console.log(value)
              }}
            >
              <Form className='form-group w-50'>
                <div class='form-group'>
                  <Field
                    type='text'
                    class='form-control py-4'
                    name='name'
                    placeholder='Enter your name'
                  />
                  <ErrorMessage
                    name='name'
                    render={msg => {
                      return <small className='text-danger'>{msg}</small>
                    }}
                  />
                </div>
                <div class='form-group'>
                  <Field
                    type='text'
                    class='form-control py-4'
                    name='email'
                    placeholder='Enter email'
                  />
                  <ErrorMessage
                    name='email'
                    render={msg => {
                      return <small className='text-danger'>{msg}</small>
                    }}
                  />
                </div>
                <div class='form-group'>
                  <Field
                    type='password'
                    class='form-control py-4'
                    name='password'
                    placeholder='Enter password'
                  />
                  <ErrorMessage
                    name='password'
                    render={msg => {
                      return <small className='text-danger'>{msg}</small>
                    }}
                  />
                </div>
                <div class='form-group'>
                  <Field
                    type='password'
                    class='form-control py-4'
                    name='confirmpassword'
                    placeholder='Example input'
                  />
                  <ErrorMessage
                    name='confirmpassword'
                    render={msg => {
                      return <small className='text-danger'>{msg}</small>
                    }}
                  />
                </div>
                <div className='form-group'>
                  <button className=' form-control btn btn-primary'>
                    Submit
                  </button>
                </div>
              </Form>
            </Formik>

            <LinkWithMessage
              msg='Already have an account ? SignIn'
              to='/Login'
            />
          </RightSection>
        </div>
      </div>
    </div>
  )
}

export default Signup
