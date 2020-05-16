import React from 'react';

import LeftSection from '../Common/LeftSection'
import RightSection from '../Common/RightSection'
import LinkWithMessage from '../Common/LinkWithMessage';

function Login(props) {
  const ComponentAfterButton = <LinkWithMessage msg="Dont have an account ? " to="/" />
  const ComponentBeforeButton = <LinkWithMessage msg="Forgot Passwor ? " to="/ForgotPassword" />
    return (
      <div className='container-fluid'>
      <div className='row'>
        <div className='col-6'>
          <LeftSection />
        </div>
        <div className='col-6 d-flex align-items-center justify-content-center'>
        <RightSection title='Login' withLogo={true}>
            <form className="form-group w-50">
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='formGroupExampleInput'
                  placeholder='Example input'
                />
              </div>
              <div class='form-group'>
                <input
                  type='text'
                  class='form-control'
                  id='formGroupExampleInput2'
                  placeholder='Another input'
                />
              </div>
              <div className="form-group">
              <button className=" form-control btn btn-primary">
                  Submit
              </button>
              </div>
            </form>
            <LinkWithMessage msg="Already have an account ? SignIn" to="/Login" />
          </RightSection>
        </div>
      </div>
    </div>
    );
}

export default Login;