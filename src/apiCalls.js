const getFetch = (address) => {
  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/${address}`)
  .then(response => response.json())
};

const dataIngredientsCleaner = (data) => {
  return data.drinks.map(ingredient => ingredient.strIngredient1)
}

const dataFilterCleaner = (data) => {
  return data.drinks.map(drink => {
    return {
      id: drink.idDrink,
      name: drink.strDrink,
      image: drink.strDrinkThumb,
    };
  });
};

const dataCocktailCleaner = (data) => {

  const drink = data.drinks[0];

  const getIngredientList = () => {
    const ingredientList = Object.keys(drink)
      .filter(prop => prop.includes("Ingredient"))
      .reduce((list, ingredient) => {
        if (drink[ingredient])
        list.push(drink[ingredient])
        return list
      }, []);
  
    const ingredientListDetails = ingredientList.map(ingredient => {
      if (drink[`strMeasure${ingredientList.indexOf(ingredient) + 1}`]) {
        return `${ingredient}: ${drink[`strMeasure${ingredientList.indexOf(ingredient) + 1}`]}`
      } else {
        return `${ingredient}`
      };
    });

    return ingredientListDetails.join(', ')
  };

  return {
    id: drink.idDrink,
    name: drink.strDrink,
    image: drink.strDrinkThumb,
    glass: drink.strGlass,
    ingredients: getIngredientList(),
    instructions: drink.strInstructions
  };
};

export default getFetch;
export { dataCocktailCleaner, dataFilterCleaner, dataIngredientsCleaner};