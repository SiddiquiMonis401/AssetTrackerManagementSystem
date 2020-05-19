import React from 'react'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'

import FormikFormBuilder from './Common/FormikFormBuilder'
import LeftSection from '../Common/LeftSection'
import RightSection from '../Common/RightSection'
import LinkWithMessage from '../Common/LinkWithMessage'

function Login (props) {
  const dispatch = useDispatch()
  const ComponentAfterButton = (
    <LinkWithMessage msg="Don't have an account ? " to='/' />
  )
  const ComponentBeforeButton = (
    <LinkWithMessage msg='Forgot Password ? ' to='/ForgotPassword' />
  )
  const formikInitialProps = {
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('This is not a valid email address, Please enter valid one')
        .required('Email is required !'),
      password: yup.string().required('password is required!')
    }),
    onSubmit (value, { setSubmitting, resetForm }) {
      console.log(value)
      setSubmitting(false)
      resetForm({})
      dispatch({ type: 'Log_in' })
    }
  }
  const fieldPropsArray = [
    { name: 'email', type: 'text' },
    { name: 'password', type: 'password' }
  ]

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6 p-0'>
          <LeftSection />
        </div>
        <div className='col-6 d-flex align-items-center justify-content-center'>
          <RightSection title='Login' withLogo={true}>
            <FormikFormBuilder
              formikInitialProps={formikInitialProps}
              fieldProps={fieldPropsArray}
              buttonTitle='Login'
              ComponentAfterButton={ComponentAfterButton}
              ComponentBeforeButton={ComponentBeforeButton}
            />
          </RightSection>
        </div>
      </div>
    </div>
  )
}

export default Login
