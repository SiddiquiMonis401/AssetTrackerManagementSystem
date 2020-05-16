import React from 'react'
import * as Yup from 'yup'

import  FormikFormBuilder  from './Common/FormikFormBuilder'
import LeftSection from '../Common/LeftSection'
import RightSection from '../Common/RightSection'
import LinkWithMessage from '../Common/LinkWithMessage'

function Signup (props) {
  const formikInitialProps = {
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmpassword: ''
    },
    validationSchema: Yup.object({
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
    }),
    onSubmit (value, { setSubmitting, resetForm }) {
      console.log(value);
      setSubmitting(false);
      resetForm({})
    }
  }
  const fieldsPropsArray = [
    { name: 'name', type: 'text' },
    { name: 'email', type: 'text' },
    { name: 'password', type: 'password' },
    { name: 'confirmpassword', type: 'password' }
  ]
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-6 px-0'>
          <LeftSection />
        </div>
        <div className='col-6 d-flex align-items-center justify-content-center'>
          <RightSection title='SignUp' withLogo={true}>
           
            <FormikFormBuilder 
            formikInitialProps={formikInitialProps} 
            fieldProps={fieldsPropsArray}
            buttonTitle='signUp'
            />

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
