import React from 'react';
import { Router,Switch,Route } from 'react-router'

import history from '../Utils/History';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Dashboard from '../Components/Dashboard';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import ForgotPassword from '../Components/ForgotPassword';
import NotFound from '../Components/Common/NotFound';

function AppRouter(props) {
    return (
        <Router history={history}>
          <Switch>
            <PrivateRoutes path="/dashboard" component={Dashboard}/>
            <PublicRoutes path="/" component={Login} exact={true} />
            <PublicRoutes path="/register" component={Signup} />
            <PublicRoutes path="/ForgotPassword" component={ForgotPassword} />
            <Route path="" component={NotFound} />
          </Switch>        
        </Router>

    );
}

export default AppRouter;