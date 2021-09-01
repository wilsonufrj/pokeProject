//Função que faz a ação de pegar os pokemons

const addPokemonAction = (namePokemon)=>{
    return ({
        type:'ADD_POKEMON',
        pokemon: namePokemon
    })
}

export default addPokemonAction