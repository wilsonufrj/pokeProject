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
    finally {
        console.log('Eh so o finally')
    }
}


const Pokemon = () => {
    
    const [data, dispatch] = useReducer(reducer, {
        loading: true,
        data: {},
    })
    useEffect(() => {
        
        dispatch({ type: 'LOADING' })
        let _aux = GetPokemons(PokeURL)
        _aux.then((res)=>{
            dispatch({
                type:'SUCCESS',
                data: res
            })
        })
    }, [])
    
    return data
}

export default  Pokemon