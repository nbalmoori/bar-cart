import React from 'react';
import Ingredient from './Ingredient'
import '../styling/IngredientsContainer.css';

const IngredientsContainer = ( {ingredientsList} ) => {
  const listOfIngredients = ingredientsList.map(ingredient => {
    return (
      <Ingredient name={ingredient} key={ingredient}/>
    )
  })

  return (
    <div >
      <h1 className="title">Choose your Ingredient</h1>
      <div className="ingredientsContainer">{listOfIngredients}</div>
    </div>
  )
}

export default IngredientsContainer;
