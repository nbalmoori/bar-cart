import { Link } from 'react-router-dom';
import IngredientsContainer from './IngredientsContainer';
import FilteredCocktailContainer from './FilteredCocktailContainer';

const HomePage = ({ ingredientsList, selectFilter, filter, filteredCocktails}) => {
  return (
    <div>
      <Link to={`/favorites`}><button>See Your Favorites</button></Link>
      <IngredientsContainer ingredientsList={ingredientsList} selectFilter={selectFilter}/>
      <FilteredCocktailContainer filter={filter} filteredCocktails={filteredCocktails}/>
    </div>
  )
}

export default HomePage;
