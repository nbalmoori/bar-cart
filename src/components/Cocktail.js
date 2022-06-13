import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Cocktail.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string
};

export default Cocktail;