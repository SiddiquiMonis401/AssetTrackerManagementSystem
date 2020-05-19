import React from 'react';
import './SideDrawer.scss'
function SideDrawer(props) {
    let drawerClass = "side__drawer";
    if(props.isOpen){
        drawerClass ="side__drawer open"
    }
    return (
        <div className={drawerClass}>
            <div className="side__drawer__header">
                 <div>Logo</div>
                 <button onClick={props.handleToggle}>x</button>
            </div>
            <div className="divider" />
            <div className="nav__items">
              {['Home','About','Message','Contacts'].map(items => (
                  <div className="nav__links">
                      {items}
                      <div className="divider" />
                  </div>
              ))}              
            </div>
        </div>
    );
}

export default SideDrawer;