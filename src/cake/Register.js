import {useState} from "react";

const Register = ({cakes, setCakes}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");


    const handleFormSubmit = (e) =>{
        e.preventDefault();
        const updatedCakes = [...cakes];
        const newCake = {
        cakeName: cakeName,
        ingredients: ingredients, 
        price: price, 
        rating: rating
      }
      updatedCakes.push(newCake);
      setCakes(updatedCakes);
    }
      
      return (
        <>
        
        <h2>Please enter a cake</h2>
        <form onSubmit={handleFormSubmit}>
        <input 
            type="text"
            name="cakeName"
            placeholder="Cake Name"
            value={cakeName}
            onChange={(e) => setCakeName(e.target.value)}/>
          <input
            type="text"
            name="cakeIngredients"
            placeholder="Ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}/>
          <input
            type="text"
            name="price"
            value={price}
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}/>
          <input
            type="text"
            name="rating"
            placeholder="rating"
            value={rating}
            onChange={(e)=> setRating(e.target.value)}/>
            <input type="submit" value="Submit"/>
        </form>
        </>);
    };     
    export default Register;