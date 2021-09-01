import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'

const Footer = ()=>{

    const countPokemon = useSelector((state)=> state.pokemon.data.counterPokemon)


    return(
        <div className='footer'>
            <h6 className='text-white'>Feito por Wilson Ramos </h6>
            <h4>Quantidade de Pokemons:  {countPokemon}</h4>
        </div>
    );
}

export default Footer