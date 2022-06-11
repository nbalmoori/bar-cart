import { Link } from 'react-router-dom';
import Ingredient from './Ingredient';
import '../styling/IngredientsContainer.css';

const IngredientsContainer = ( {ingredientsList, selectFilter} ) => {
  const listOfIngredients = ingredientsList.map(ingredient => {
    return (
      <Ingredient name={ingredient} key={ingredient} selectFilter={selectFilter}/>
    );
  });

  return (
    <div className="ingredientsView">
      <h1 className="title">Choose your Ingredient</h1>
      <div className="ingredientsContainer">{listOfIngredients}</div>
      <h1 className="title">or</h1>
      <Link to={`/favorites`}><button className="favoriteButton">View Your Favorite Cocktails</button></Link>
    </div>
  );
};

export default IngredientsContainer;
