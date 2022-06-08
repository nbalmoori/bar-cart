import '../styling/Ingredient.css';

const Ingredient = ({name}) => {
  return (
    <div className="ingredient">
      <img src={`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`}/>
      <p>{name}</p>
    </div>
  )
}

export default Ingredient;