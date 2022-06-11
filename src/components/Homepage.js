import IngredientsContainer from './IngredientsContainer';
import FilteredCocktailContainer from './FilteredCocktailContainer';
import homepageImage from '../assets/homepage.jpg'
import '../styling/Homepage.css';


const HomePage = ({ ingredientsList, selectFilter, filter, filteredCocktails}) => {
  return (
    <div className="homepage">
      <header>
        <div className="homepageHeader">
          <h1 className="homepageTitle">BAR CART</h1>
          <p className="homepageDescription">Find inspiration to create a signature cocktail with an ingredient you already have on hand! 
            No clue what to make with that bottle of spiced rum you were gifted? Have too many lemons that you need to use up?  
            We have the perfect cocktail recipe waiting for you! 
            All you have to do is scroll below to see a list of ingredients to choose from.
            Once you click on an ingredient, a list of cocktails that utilize that ingredient will display below. 
            If one of the cocktails peaks your interest, click on it to find out more.
            Cheers!</p>
        </div>
        <img className="homepageImage" src={homepageImage}/>
      </header>
      <IngredientsContainer ingredientsList={ingredientsList} selectFilter={selectFilter}/>
      <FilteredCocktailContainer filter={filter} filteredCocktails={filteredCocktails}/>
    </div>
  )
}

export default HomePage;
