import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";


export const AddMovie = () => {
    
  const [movies, setMovies] = useContext(MovieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const updateName = e => {
    setName(e.target.value);
  };

  console.log(name);
  

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const addMovie = e => {
    e.preventDefault();
    setMovies([...movies, { name: name, price: "$"+ price, id: 29832 }])

  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={updateName}
      />
      &nbsp;
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};
