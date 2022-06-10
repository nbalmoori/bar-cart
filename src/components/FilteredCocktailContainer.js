import Cocktail from './Cocktail';
import '../styling/FilteredCocktailContainer.css';

const FilteredCocktailContainer = ( {filteredRecipes, filter} ) => {
  const listOfRecipes = filteredRecipes.map(recipe => {
    return <Cocktail 
      name={recipe.strDrink} 
      image={recipe.strDrinkThumb}
      id={recipe.idDrink}
      key={recipe.idDrink}
    />
  });

  return (
    <div>
    <h2>The following drinks contain {filter}</h2>
    <div className="filteredRecipes">{listOfRecipes}</div>
    </div>
  );
};

export default FilteredCocktailContainer;