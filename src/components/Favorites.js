import { Link } from 'react-router-dom';
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
      <Link to={`/`}><button>Return Home</button></Link>
      <div className="favoriteCocktails">{listOfFavoriteCocktails}</div>
    </div>
  );
};

export default Favorites;