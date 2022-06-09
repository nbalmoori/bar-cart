import '../styling/Recipe.css';

const Recipe = ({name, image, key}) => {
  return (
    <div class="cocktail" id={key}>
      <img src={image}/>
      <p>{name}</p>
    </div>
  );
};

export default Recipe;