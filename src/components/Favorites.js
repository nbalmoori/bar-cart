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
    <div>
      <Link to={`/`}><button>Home</button></Link>
      {listOfFavoriteCocktails}
    </div>
  );
};

export default Favorites;