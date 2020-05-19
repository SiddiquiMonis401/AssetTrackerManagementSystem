import React from 'react'

import ToggleButton from './SideDrawer/ToggleButton'
import logo from '../Assets/images.jpg'
import '../Styles/Toolbar.scss'
function Toolbar (props) {
  return (
    <div className='toolbar'>
      <div className='toolbar__nav'>
        <div>
          <ToggleButton handleToggle={props.handleToggle} />
        </div>
        <div className='toolbar__logo'>Logo</div>
        <div className='spacer' />
        <div className='toolbar__nav__items'>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Toolbar
