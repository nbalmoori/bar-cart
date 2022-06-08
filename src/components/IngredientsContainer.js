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
    <div>
      {listOfIngredients}
    </div>
  )
}

export default IngredientsContainer;
