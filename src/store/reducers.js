import {combineReducers} from 'redux'

import pokeReducers from './Pokemon/PokemonReducer'

const reducers = combineReducers({
    pokeReducers
})

export {reducers}