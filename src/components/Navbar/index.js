import React from 'react'
import './style.css'
import logo from './logo2.png'


const NavBar = () => {
    return (
        <div className='header'>
            <div className='brand'>
                <img alt='logo' className='logo' src={logo} width='175px' />
                <h2 className='titulo'>Pokémon</h2>
            </div>
            <div className='search'>
                <form>
                    <input type='text' placeholder='Search a Pokemon' />
                    <button className='btn btn-dark'>Search</button>
                </form>
            </div>
            <div className="pagination">
                <button>❮</button>
                <button>❯</button>
            </div>
        </div>
    )
}

export default NavBar