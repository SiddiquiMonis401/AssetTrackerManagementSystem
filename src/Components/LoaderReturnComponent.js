import React,{ useState, useEffect } from 'react';

function LoaderReturnComponent(wrappedComp) {
    const [loading, setLoading] =useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        },4000);
    }, [])
    return (
        <div>
            {loading ? <div>loading</div> : <wrappedComp /> }
        </div>
    );
}

export default LoaderReturnComponent;