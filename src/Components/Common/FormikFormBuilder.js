import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

function FormikFormBuilder ({
  formikInitialProps,
  fieldProps,
  buttonTitle,
  ComponentAfterButton,
  ComponentBeforeButton
}) {
  // Function for mapping the fields props object to the fields
  function FieldPropMappper (fieldPropsArray) {
    return fieldPropsArray.map(({ name, type }) => {
      return (
        <div className='form-group'>
          <Field
            type={type}
            class='form-control py-4'
            name={name}
            placeholder='Enter your name'
          />
          <ErrorMessage
            name={name}
            render={msg => {
              return <small className='text-danger'>{msg}</small>
            }}
          />
        </div>
      )
    })
  }
  return (
    <Formik
      initialValues={formikInitialProps.initialValues}
      validationSchema={formikInitialProps.validationSchema}
      onSubmit={formikInitialProps.onSubmit}
    >
      <Form className='form-group w-50'>
        {FieldPropMappper(fieldProps)}
        <div className='form-group'>
          {ComponentBeforeButton}
          <button className='form-control btn btn-primary mb-3'>
            {buttonTitle}
          </button>
          {ComponentAfterButton}
        </div>
      </Form>
    </Formik>
  )
}

export default FormikFormBuilder
