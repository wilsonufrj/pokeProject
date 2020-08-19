import axios from 'axios'
import {useReducer,useEffect} from 'react'

const PokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=150'


const monster = async (data) => {

    let _arrInfo = await Promise.all(
        data.map((pokemon) => axios.get(pokemon.url))
    )
    return _arrInfo
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
            }
        case 'SUCCESS':
            return ({
                ...state,
                loading: false,
                data: action.data
            })
        default:
            return state
    }
}

async function GetPokemons(url) {
    try {
        
        const response = await axios.get(url)
        const data = response.data.results
        let aux = await monster(data)
        return aux 
    }
    catch(err){
        return err
    }
}


const Pokemon = () => {
    
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {},
    })

    useEffect(() => {
        const _aux = GetPokemons(PokeURL)
        if(_aux)
            dispatch({
                type:'SUCCESS',
                data: _aux
            })
        
    }, [])
    
    return data
}

export default  Pokemon