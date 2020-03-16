import React from 'react';
import PlaceItem from './PlaceItem';
import './PlaceList.css';

const PlaceList = props => {
    if(props.items.length === 0){
        return <h2 className="place-list centre">No Places found...</h2>
    }
    return (
        <ul className="place-list">
            {props.items.map(place => 
                <PlaceItem 
                key={place.id}
                id={place.id}
                name={place.name}
                image={place.image}
                title={place.title}
                description={place.description}
                creatorId={place.user}
                address={place.address}
                coordinates={place.location} /> )}
        </ul>
    )
}

export default PlaceList;