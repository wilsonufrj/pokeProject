import { combineReducers, createStore} from "redux"
import pokeReducer from "./Pokemon/PokemonReducer"


const rootReducer = combineReducers({
    pokemon:pokeReducer
})

//O createStore precisa importar os reducers como padrão
const store = createStore(rootReducer)

//Pesquisar como funciona as requisições assincronas no redux
export default store