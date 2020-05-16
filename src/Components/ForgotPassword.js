import React from 'react'

import * as yup from 'yup'

import FormikFormBuilder from './Common/FormikFormBuilder'
import LeftSection from '../Common/LeftSection'
import RightSection from '../Common/RightSection'
import LinkWithMessage from '../Common/LinkWithMessage'

function ForgotPassword (props) {
  const ComponentAfterButton = (
    <LinkWithMessage msg='Go back to signin' to='/Login' />
  )
  const formikInitialProps = {
    initialValues: {
      email: ''
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('This is not a valid email address, Please enter valid one')
        .required('Email is required !')
    }),
    onSubmit (value, { setSubmitting, resetForm }) {
      console.log(value)
      setSubmitting(false)
      resetForm({})
    }
  }
  const fieldPropsArray = [{ name: 'email', type: 'text' }]

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
              buttonTitle='Reset'
              ComponentAfterButton={ComponentAfterButton}
            />
          </RightSection>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
