import IngredientsContainer from './IngredientsContainer';
import FilteredCocktailContainer from './FilteredCocktailContainer';

const HomePage = ({ ingredientsList, selectFilter, filter, filteredRecipes}) => {
  return (
    <div>
      <IngredientsContainer ingredientsList={ingredientsList} selectFilter={selectFilter}/>
      <FilteredCocktailContainer filter={filter} filteredRecipes={filteredRecipes}/>
    </div>
  )
}

export default HomePage;
