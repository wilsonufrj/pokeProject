import { createStore,combineReducers } from "redux"

import pokemonReducer from "./Pokemon/PokemonReducer"

//Carregar aqui não somente o reducer com o array dos n pokemons
//mas tambem fazer um reducer com os dados de cada pokemon
const rootReducer =  combineReducers({
    pokemon : pokemonReducer,

})

const store = createStore(rootReducer)

//Pesquisar como funciona as requisições assincronas no redux
export default store