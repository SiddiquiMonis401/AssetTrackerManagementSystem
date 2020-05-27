import React from 'react'

import './SideDrawer.scss'
const ToggleButton = props => (
  <button className='toggle_button' onClick={props.handleToggle}>
    {
     props.renderedIn!=="side_drawer" ? (
      <>
        <div className='toggle_button_line' />
        <div className='toggle_button_line' />
        <div className='toggle_button_line' />
      </>)
      : <p className="cancel_button">X</p>
    }
  </button>
)

export default ToggleButton
