import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoutes({component:Component,location}) {
    console.log(location.state);
    const  { loggedIn } = useSelector(state => state.LoggedReducers);
    console.log(loggedIn)
    return (
        <Route component={(props) => (
            <>
            {
            true ? (
            <Component {...props} />)  : (<Redirect to="/" />)
            }
            </>
        )} />
        
    );
}

export default PrivateRoutes;