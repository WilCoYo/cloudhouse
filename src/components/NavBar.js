import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  const navigate = useNavigate();


  return (
    <div className='navbar'>
        <div className='navbar-text'>
          <h1
            className='brand-name'
            onClick={() => {
              navigate('/');
            }}>
            <strong>cloud</strong>|house</h1>
        </div>
    </div>
  )
}

export default NavBar