import React from 'react';
import HOCLoader from './HOCLoader';
function DataShower(props) {
    return (
        <div>
            showing some data;
        </div>
    );
}

export default HOCLoader('loading',DataShower);