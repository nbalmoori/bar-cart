import { Link } from 'react-router-dom';
import '../styling/Favorites.css';

const Favorites = () => {
  return (
    <div>
      <Link to={`/`}><button>Home</button></Link>
    </div>
  );
};

export default Favorites;