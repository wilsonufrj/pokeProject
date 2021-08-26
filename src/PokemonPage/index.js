import React from 'react'
import { connect } from 'react-redux'
//Apperance
import './style.css'




/* const PokemonPage = () => {
    const data = Pokemon()
    return (
        <div className='mainPage' >
            <div className='boxMainPage'>
                {data.loading? <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
              </div> :
                    data.data.map((value,index)=>RenderCard(value.data,index))
                }
            </div>


        </div>

    )

} */

const PokemonPage = ({pokemons})=>{
    return(
        <div className="mainPage">
            {pokemons}
        </div>
    )
}

function mapStateToProps(state){
    return{
        //retornar as propriedades que vão ser passadas para o componente
    }
}

export default connect(mapStateToProps)(PokemonPage)
