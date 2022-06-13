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
      <Link to={`/favorites`}><button className="favoriteViewButton">View Your Favorite Cocktails</button></Link>
      <h1 className="ingredientsTitle">Choose your Ingredient</h1>
      {!ingredientsList.length && <div>Uh oh! Something went wrong. We are unable to load any ingredients at this time.  Please try again later.</div>}
      <div className="ingredientsContainer">{listOfIngredients}</div>
    </div>
  );
};

export default IngredientsContainer;
