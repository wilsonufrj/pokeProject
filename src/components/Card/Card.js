import React from 'react'
import {tipos,setColor,capitalize} from'./cardController'
import './styles.css'



const RenderCard = (pokemon,index)=>{
    const types = tipos(pokemon.types)

     return( 
        <div className='cardPersonal' key={index}>
        <img alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/>
        
            <h4>{capitalize(pokemon.name)}</h4>
            {
                types.length===1?
                <div>
                    <h2 className='badge ' style={setColor(types[0])}>{types[0]}</h2>
                    </div>:
                 <div>
                    <h6 className='badge' style={setColor(types[0])}>{types[0]}</h6>
                    <h6 className='badge ml-1' style={setColor(types[1])}>{types[1]}</h6>
                </div>
            }
        
        <button className='btn btn-danger'> More</button>
    </div>
    ) 
}



export default RenderCard

/* <div className='cardBody'>
            <h4 className='cardTitle'>{capitalize(pokemon.name)}</h4>
            {
                types.length===1?
                    <h2 className='badge' style={setColor(types[0])}>{types[0]}</h2>:
                 <div>
                    <h6 className='badge' style={setColor(types[0])}>{types[0]}</h6>
                    <h6 className='badge ml-1' style={setColor(types[1])}>{types[1]}</h6>
                </div>
            }
            
        </div> */