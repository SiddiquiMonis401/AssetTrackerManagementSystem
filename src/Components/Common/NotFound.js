import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center ">
          <h1 >Error <span className="text-danger">404</span> Page Not Found!</h1>
          <Link to="/" className="text-info">Go to home Page</Link>  
        </div>
    );
}

export default NotFound;