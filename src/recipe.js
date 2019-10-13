import React from "react";

const Recipe = ({title,calories,image,ingredients}) => {
  return(
    <div className='recipe'>
        <h1>{title}</h1>
        <p>Calories: {calories.toFixed(2)}</p>
        <img className='image' src={image} alt=""  />
        <ol>    {ingredients.map(i =>(  <li>{i.text}</li>  ))}
        </ol>
    </div>
  );
};
export default Recipe;
