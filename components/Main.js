import React from 'react';
import data from '../data'
import Card from './Card';

export default function Main() {
    const Data = data.map(vals => {
        return (
            <Card
                className="card-independent"
                key={vals.id}
                item={vals}
            />  
        );
    })
    return(
        <div className="container--main">
            {Data}
        </div>
    )
}