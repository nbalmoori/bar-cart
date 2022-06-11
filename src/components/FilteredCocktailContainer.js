import Cocktail from './Cocktail';
import '../styling/FilteredCocktailContainer.css';

const FilteredCocktailContainer = ( {filteredCocktails, filter} ) => {
  const listOfCocktails = filteredCocktails.map(cocktail => {
    return <Cocktail 
      name={cocktail.name} 
      image={cocktail.image}
      id={cocktail.id}
      key={cocktail.id}
    />
  });

  return (
    <div>
    <h2>The following drinks contain {filter}</h2>
    <div className="filteredCocktails">{listOfCocktails}</div>
    </div>
  );
};

export default FilteredCocktailContainer;