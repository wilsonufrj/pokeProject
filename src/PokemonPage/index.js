import React from 'react'

//Apperance
import './style.css'
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Pokemon from './pokeController'
import RenderCard from '../components/Card/Card'



const PokemonPage = () => {
    const data = Pokemon()
    
    return (
        <div className='d-flex flex-column justify-content-between bg-dark ' >
            <header className='mb-2' >
                <NavBar />
            </header>

            <div className='container-fluid mt-2 bg-dark'>
                <div className='row'>
                    {
                        data.loading ?<p>Loading ...</p> :
                         data.data.map((res,index)=>RenderCard(res.data,index))
                    }
                </div>
            </div>

            <footer className='container-fluid'>
                <Footer />
            </footer>

        </div>

    )

}

export default PokemonPage
