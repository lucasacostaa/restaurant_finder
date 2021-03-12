import React, {useState, useEffect} from 'react';
import Restaurant from './Restaurant';
import RestaurantFinder from '../api/RestaurantFinder';
import "./styles/RestoTable.css";
import {useHistory} from 'react-router-dom'


const RestoTable = () => {
    const [restaurants, setRestaurants] = useState();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/");
                setRestaurants(response.data)
            } catch (err) {
                console.error(err)
            }
        }
        
        fetchData()
    }, [])


    return (
        <div className="container">
            <table>
            <thead>
            <tr>
                <th>Restaurant</th>
                <th>Location</th>
                <th>Price Range</th>
                <th>Ratings</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {/* <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr> */}
            {restaurants && restaurants.map(el => <Restaurant id={el.id} name={el.name} location={el.location} price_range={el.price_range}/>)}
            </tbody>
            </table> 
        </div>
    )
}

export default RestoTable
