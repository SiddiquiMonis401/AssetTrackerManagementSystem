import React from 'react';
import logo from '../Assets/images.jpg'
//styles
import '../Styles/RightSection.scss'

function RightSection({ title, withLogo, children }) {
    return (
        <div className="right-section d-flex flex-column align-items-center justify-content-between">
            {withLogo ? <img src={logo} alt="brandLogo" />:null}
            <h1 className="text-primary">{title}</h1>
            {children}

        </div>
    );
}

export default RightSection;