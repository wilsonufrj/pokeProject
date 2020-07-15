import React from 'react'
import './style.css'
import logo from './logo2.png'


const NavBar = () => {
    return (
        <div id='header' className='p-1'>
            <nav className='navbar navbar-expand justify-content-center'>
                <img alt='logo' className='navbar-brand' src={logo} width='175px'/>
                <h2 id='titulo' className='m-4'>Pokemon</h2>
            </nav>
        </div>
    )
}

export default NavBar