import React from 'react'
import {tipos,setColor,capitalize} from'./cardController'
import './styles.css'



const RenderCard = (pokemon,index)=>{

    const types = tipos(pokemon.types)

    
    return( 
        <div className='card  text-center ml-5 mb-2' id='card' key={index}>
        <img alt='Pokemon' className='card-img-top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
        <div className='card-body'>
            <h4 className='card-title'>{capitalize(pokemon.name)}</h4>
            {
                types.length===1?
                    <h2 className='badge' style={setColor(types[0])}>{types[0]}</h2>:
                 <div>
                    <h6 className='badge' style={setColor(types[0])}>{types[0]}</h6>
                    <h6 className='badge ml-1' style={setColor(types[1])}>{types[1]}</h6>
                </div>
            }
            
        </div>
    </div>
    )
}



export default RenderCard

