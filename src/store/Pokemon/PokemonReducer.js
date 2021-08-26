const INICIAL_STATE = {
    type:"LOAD",
    payload:{}
}

//Carrega os novos dados para incluir no DS store

export default function(state,action){
    switch(action.type){
        case 'LOADING':
            return INICIAL_STATE
        case 'COMPLETE':
            return {
                ...state,
                payload:{
                    type:"bla"
                }
            }

        default:
            return INICIAL_STATE
    }
}