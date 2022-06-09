import '../styling/Recipe.css';

const Recipe = ({name, image, id}) => {
  return (
    <div className="cocktail" id={id}>
      <img className="cocktail-image" src={image}/>
      <p className="cocktail-name"> {name}</p>
    </div>
  );
};

export default Recipe;