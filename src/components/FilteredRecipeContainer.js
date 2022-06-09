import Recipe from './Recipe';
import '../styling/FilteredRecipeContainer.css';

const FilteredRecipeContainer = ( {filteredRecipes, filter} ) => {
  const listOfRecipes = filteredRecipes.map(recipe => {
    return <Recipe 
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

export default FilteredRecipeContainer;