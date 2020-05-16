import React, {Component} from 'react';

function HOCLoader(propName,WrappedComponent) {
    
    return class HOCLoader extends Component {
        render() {
            return (
                <div>
                    {this.props[propName] ? 
                    <div>loading</div>:
                    <WrappedComponent {...this.props} />

                    }
                </div>
            )
        }
    }
    
}

export default HOCLoader;