import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <h1>Green<span>Basket</span></h1>
        </div>
        <div className="nav-links">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/manage-products'>Admin</Link>

            <button>Login</button>
        </div>
    </div>
  )
}

export default Header