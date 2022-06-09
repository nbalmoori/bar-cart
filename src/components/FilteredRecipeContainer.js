import Recipe from './Recipe';
import '../styling/FilteredRecipeContainer';

const FilteredRecipeContainer = ( {filteredRecipes, filter} ) => {
  const listOfRecipes = filteredRecipes.map(recipe => {
    return <Recipe 
      name={recipe.strDrink} 
      image={recipe.strDrinkThumb}
      key={recipe.idDrink}
    />
  });

  return (
    <div>
    <h2>The following drinks contain {filter}</h2>
    <div>{listOfRecipes}</div>
    </div>
  );
};

export default FilteredRecipeContainer;