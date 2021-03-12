import React, { useState } from "react";
import RestaurantFinder from "../api/RestaurantFinder";
import "./styles/CreateResto.css";

const CreateResto = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price_range, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const response = await RestaurantFinder.post("/", {name, location,price_range});
          console.log(response);
      } catch (err) {
          console.error(err)
      }
  }

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Restaurant name"
        ></input>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
        ></input>
        <select value={price_range}
          onChange={(e) => setPriceRange(e.target.value)}>
          <option disabled>Price Range</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
          <option value="5">$$$$$</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateResto;
