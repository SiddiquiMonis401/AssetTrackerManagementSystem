import React from 'react'
import { Link } from 'react-router-dom'
function LinkWithMessage ({ msg, to }) {
  return (
    <div className='form-group'>
      <Link to={to}> {msg}</Link>
    </div>
  )
}

export default LinkWithMessage
