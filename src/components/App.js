import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import getFetch from '../apiCalls';
import IngredientsContainer from './IngredientsContainer.js';
import FilteredRecipeContainer from './FilteredRecipeContainer.js';
import '../styling/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsList: [],
      filter: "",
      filteredRecipes: [],
    };
  };

  componentDidMount = () => {
    getFetch('list.php?i=list')
    .then(data => data.drinks.map(ingredient => ingredient.strIngredient1))
    .then(data => this.setState({ingredientsList: data}))
  };

  selectFilter = (ingredient) => {
    this.setState({filter: ingredient});
    getFetch(`filter.php?i=${ingredient}`).then(data => data.drinks)
    .then(data => this.setState({filteredRecipes: data}))
  };

  render() {
    return (
      <main className="App">
        <header>BAR CART</header>
        <Route exact path='/' render={() => <IngredientsContainer ingredientsList={this.state.ingredientsList} selectFilter={this.selectFilter}/> } /> 
        <Route exact path='/' render={() => <FilteredRecipeContainer filter={this.state.filter} filteredRecipes={this.state.filteredRecipes}/> } />
      </main>
    );
  };
};

export default App;
