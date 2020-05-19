import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PublicRoutes({component:Component}) {
    const  { loggedIn } = useSelector(state => state.LoggedReducers);
    return (
        <Route component={(props) => (
            <>
            {
            !loggedIn ? <Component {...props} />  : <Redirect to="/dashboard" />
            }
            </>
        )} />
        
    );
}

export default PublicRoutes;