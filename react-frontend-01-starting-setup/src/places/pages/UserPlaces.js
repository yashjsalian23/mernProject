import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const PlaceData = [
    {
        id: "1",
        name: "Gateway Of India",
        image: "https://static.toiimg.com/thumb/width-800,height-600,msid-29505591.cms",
        title: "Gateway of India",
        description: "Best to place to visit in Mumbai",
        address: "Colaba, mumbai",
        user: "1",
        location: {
            lan: "70",
            long: "88.4"
        }
    },
    {
        id: "2",
        name: "Gateway Of India",
        image: "https://static.toiimg.com/thumb/width-800,height-600,msid-29505591.cms",
        title: "Gateway of India",
        description: "Best to place to visit in Mumbai",
        address: "Colaba, mumbai",
        user: "2",
        location: {
            lan: "70",
            long: "88.4"
        }
    }
]
const UserPlaces = props => {
    const userId = useParams().userId;
    const filteredArray = PlaceData.filter(place => place.user === userId);
    return <PlaceList items={filteredArray}/>
};

export default UserPlaces;