import '../styling/Ingredient.css';

const Ingredient = ({name}) => {
  return (
    <div>
      <img src={`https://www.thecocktaildb.com/images/ingredients/${name}-Small.png`}/>
      <p>{name}</p>
    </div>
  )
}

export default Ingredient;