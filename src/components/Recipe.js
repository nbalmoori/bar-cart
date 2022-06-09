import '../styling/Recipe.css';

const Recipe = ({name, image, key}) => {
  return (
    <div class="cocktail" id={key}>
      <img className="cocktail-image" src={image}/>
      <p className="cocktail-name"> {name}</p>
    </div>
  );
};

export default Recipe;