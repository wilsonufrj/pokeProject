import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import addPokemonAction from '../store/Pokemon/PokemonActions'
//Apperance
import './style.css'



const PokemonPage = ()=>{
    const data = useSelector(state => state.pokemon.data)
    const dispatch = useDispatch()

     function addPokemon(){
        dispatch(addPokemonAction('pikachu'))  
    } 

    return (
        <div className="mainPage">
                <button
                 onClick={addPokemon}> Adicionar Pokemon</button>
    
                <ul>
                    {data.pokemons.map(pokemon=> <li key={pokemon}>{pokemon}</li>)}
                </ul>
               
            </div>
    );
}

export default PokemonPage
