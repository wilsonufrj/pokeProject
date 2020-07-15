 export const capitalize = (string)=>{
    return string.charAt().toUpperCase() + string.slice(1)
}

export const tipos = (arr)=>{
    let type = []
    for(let i = 0;i<arr.length;i++)
        type.push(arr[i].type.name)
    
    return type
}

const _color = {
    water:'#17a2b8',
    poison:'#9400d3',
    flying:'#63c5da',
    grass:'#228b22',
    bug:'#74ff74',
    fire:'#ff2400',
    ghost:'#8b008b',
    normal:'#808080',
    dark:'#ff69b4',
    rock:'#8e2323',
    ground:'#a62a2a',
    electric:'#ffe135',
    fairy:'#fc0fc0',
    psychic:'#e11584',
    fighting:'#9e4848',
    ice:'#00dbff',
    steel:'#808080',
    dragon:'#9867c5'
}


export const setColor = (type)=>{
    let color2 = _color[type]
    return {
        background:color2,
        color:'#fff'
    }
}
