import React from 'react'
import { Link } from 'react-router-dom';

function Header () {
  return (
    <div>
      <h1>React-ssr</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
export default Header