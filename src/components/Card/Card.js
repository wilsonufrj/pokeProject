import React from 'react'
import { tipos, setColor, capitalize } from './cardController'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

import './styles.css'



const RenderCard = (pokemon, index) => {
    const types = tipos(pokemon.types)

    const header = (
        <img alt='Pokemon' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
    );

    const footer = (
        <Button className='btn btn-danger' style={{ marginLeft: '0.5em' }} label="Check" icon="pi pi-check" />
    );

    return (
        <div>
            <Card title={capitalize(pokemon.name)} footer={footer} header={header} className="m-3">
                {
                    types.length === 1 ?
                        <div>
                            <h2 className='badge ' style={setColor(types[0])}>{types[0]}</h2>
                        </div> :
                        <div>
                            <h6 className='badge' style={setColor(types[0])}>{types[0]}</h6>
                            <h6 className='badge ml-1' style={setColor(types[1])}>{types[1]}</h6>
                        </div>
                }
            </Card>
        </div>

    )
}



export default RenderCard
