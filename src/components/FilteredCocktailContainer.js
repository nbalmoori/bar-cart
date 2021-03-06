import PropTypes from 'prop-types';
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

  if (filter) 
    {return (
      <div className="filteredCocktailsView">
      <h2>The following drinks contain {filter.toLowerCase()}:</h2>
      <div className="filteredCocktails">{listOfCocktails}</div>
      </div>
    );
  } else {
    return (
      <h2>then scroll down!</h2>
    )
  }
};

FilteredCocktailContainer.propTypes = {
  filter: PropTypes.string,
  filteredCocktails: PropTypes.array
};

export default FilteredCocktailContainer;