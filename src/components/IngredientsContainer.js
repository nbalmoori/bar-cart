import Ingredient from './Ingredient';
import '../styling/IngredientsContainer.css';

const IngredientsContainer = ( {ingredientsList, selectFilter} ) => {
  const listOfIngredients = ingredientsList.map(ingredient => {
    return (
      <Ingredient name={ingredient} key={ingredient} selectFilter={selectFilter}/>
    );
  });

  return (
    <div >
      <h1 className="title">Choose your Ingredient</h1>
      <div className="ingredientsContainer">{listOfIngredients}</div>
    </div>
  );
};

export default IngredientsContainer;
