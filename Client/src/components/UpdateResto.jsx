import React, {useState} from 'react';
import RestaurantFinder from "../api/RestaurantFinder";

const UpdateResto = () => {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price_range, setPriceRange] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.put("/", {name, location, price_range});
            console.log(response);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="container">
            <h1>Update Restaurant</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="name">Name</label>
                <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Restaurant name"
                ></input>
                <label htmlFor="location">Location</label>
                <input
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Location"
                ></input>
                <label htmlFor="price_range">Price Range</label>
                <input
                id="price_range"
                value={price_range}
                onChange={(e) => setPriceRange(e.target.value)}
                type="number"
                placeholder="Price Range"
                ></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UpdateResto
