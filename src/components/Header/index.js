import React from 'react'
import { Link } from 'react-router-dom';
// import Demo from 'npm-push-component'
const Demo = require('npm-push-component')

function Header () {
  return (
    <div>
      <h1>React-ssr</h1>
      <Demo/>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  )
}
export default Header