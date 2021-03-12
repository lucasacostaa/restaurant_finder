import React from 'react';
import { useHistory } from 'react-router';
import RestaurantFinder from '../api/RestaurantFinder'

const Restaurant = ({id, name, location, price_range}) => {

    const history = useHistory();

    const handleDelete = async () => {
        try {
            const response = await RestaurantFinder.delete(`/${id}`);
            console.log(response)
        } catch (err) {
            console.error(err)
        }
    }

    const handleUpdate = () => {
        history.push(`/restaurants/${id}/update`)
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{location}</td>
            <td>{price_range}</td>
            <td>Rating</td>
            <td><button onClick={() => {handleUpdate(id)}}>Edit</button></td>
            <td><button onClick={() => handleDelete()}>Delete</button></td>
        </tr>
    )
}

export default Restaurant
