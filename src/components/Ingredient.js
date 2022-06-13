import PropTypes from 'prop-types';
import '../styling/Ingredient.css';

const Ingredient = ({name, selectFilter}) => {
  return (
    <div className="ingredient" id={name} onClick={(event) => selectFilter(event.target.id)}>
      <img className="ingredient-image" src={`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`} alt={name}/>
      <p className="ingredient-name">{name}</p>
    </div>
  );
};

Ingredient.propTypes = {
  name: PropTypes.string,
};

export default Ingredient;