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
        <div className='mainPage' >
            <div>
                <NavBar/>
            </div>

            <div className='boxMainPage'>
                {data.loading? <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div> :
                    data.data.map((value,index)=>RenderCard(value.data,index))
                }
            </div>

            <footer>
                <Footer/>
            </footer>

        </div>

    )

}

export default PokemonPage
