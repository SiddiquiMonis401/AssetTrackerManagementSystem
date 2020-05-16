import React from 'react';
import { Switch, Route } from 'react-router';
import Signup from '../Components/Signup';
import ForgotPassword from '../Components/ForgotPassword';
import Login from '../Components/Login';
function PublicRoutes(props) {
    return (
        <Switch>
            <Route exact path="/" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Forgotpassword" component={ForgotPassword} /> 
                
        </Switch>
    );
}

export default PublicRoutes;