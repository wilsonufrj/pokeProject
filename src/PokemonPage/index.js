import React from 'react'

//Apperance
import './style.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Pokemon from './pokeController'
//import RenderCard from '../components/Card/Card'



const PokemonPage = () => {
    const data = Pokemon()
    return (
        <div className='mainPage' >
            <div className='boxMainPage'>
                <NavBar/>
            </div>

            <div className='boxMainPage'>
                <p>body</p>
            </div>

            <footer className='boxMainPage'>
                <Footer/>
            </footer>

        </div>

    )

}

export default PokemonPage
