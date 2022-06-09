import { Link } from 'react-router-dom';
import '../styling/Cocktail.css';

const Cocktail = ({name, image, id}) => {
  return (
    <Link to={`/${id}`}>
    <div className="cocktail" id={id}>
      <img className="cocktail-image" src={image}/>
      <p className="cocktail-name"> {name}</p>
    </div>
    </Link>
  );
};

export default Cocktail;