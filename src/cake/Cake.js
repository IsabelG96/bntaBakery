const Cake = ({cake}) => {
        // add the properties in a simple way referring to day2 lab
        // add an unordered list with the properties of the cake in them referring to day1 lab

// const returnIngredientsAsList = () =>{
//   ingredients
// }        

const ingredientListItems = cake.ingredients.map((ingredient)=>{
  return <li>{ingredient}</li>
})


  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p>name: {cake.cakeName}</p>
        <p>ingredients: </p>
        <ul>{ingredientListItems}</ul>
        <p>price: {cake.price}</p>
        <p>rating: {cake.rating}</p>
        
    </>
  )
}

export default Cake;