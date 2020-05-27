import React from 'react'
import { Link } from 'react-router-dom'

//styles
import './SideDrawer.scss'

//Components
import ToggleButton from './ToggleButton'

function SideDrawer (props) {
  let drawerClass = 'side__drawer'
  if (props.isOpen) {
    drawerClass = 'side__drawer open'
  }
  return (
    <div className={drawerClass}>
      <div className='side__drawer__header'>
        <div>Logo</div>
        <ToggleButton
          handleToggle={props.handleToggle}
          renderedIn='side_drawer'
        />
      </div>
      <div className='nav__items '>
        {['Profile', 'Location', 'Vednors', 'Assets'].map(items => (
          <Link className='nav__links'>{items}</Link>
        ))}
      </div>
    </div>
  )
}

export default SideDrawer
