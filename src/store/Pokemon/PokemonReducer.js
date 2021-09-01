
const INICIAL_STATE = {
    data:{
        counterPokemon:4,
        pokemons: [
            'charmander',
            'squirtle',
            'bulbassauro',
            'chicorita'
        ]
    }
    
}


const pokeReducer = (state=INICIAL_STATE,action)=>{
    
    switch(action.type){
        case 'ADD_POKEMON':
            return{
                ...state,
                data:{
                    counterPokemon: state.data.counterPokemon+1,
                    pokemons:[...state.data.pokemons , action.pokemon]
                }
            }
        default:
            return state;
    }
}

export default pokeReducer