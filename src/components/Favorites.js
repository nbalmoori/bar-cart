import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cocktail from './Cocktail';
import '../styling/Favorites.css';

const Favorites = ( {favorites} ) => {
  
  const listOfFavoriteCocktails = favorites.map(cocktail => {
    return <Cocktail 
      name={cocktail.name} 
      image={cocktail.image}
      id={cocktail.id}
      key={cocktail.id}
    />
  });

  return (
    <div className="favoritesPageView">
      <h1>Favorite Recipes</h1>
      {!favorites.length && <h2>Glass empty! No favorites saved yet.</h2>}
      <Link to={`/`}><button className="homeButton">Return Home</button></Link>
      <div className="favoriteCocktails">{listOfFavoriteCocktails}</div>
    </div>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default Favorites;