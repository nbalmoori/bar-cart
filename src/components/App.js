import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import getFetch, { dataFilterCleaner, dataIngredientsCleaner } from '../apiCalls';
import Homepage from './Homepage';
import CocktailDetails from './CocktailDetails';
import Favorites from './Favorites';
import '../styling/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsList: [],
      filter: "",
      filteredRecipes: [],
      favorites: [],
    };
  };

  componentDidMount = () => {
    getFetch('list.php?i=list')
    .then(data => dataIngredientsCleaner(data))
    .then(data => this.setState({ingredientsList: data}))
  };

  selectFilter = (ingredient) => {
    this.setState({filter: ingredient});
    getFetch(`filter.php?i=${ingredient}`)
    .then(data => dataFilterCleaner(data))
    .then(data => this.setState({filteredRecipes: data}))
  };

  addToFavorites = (id) => {

    this.setState({favorites: [...this.state.favorites, id]})
  }

  render() {
    return (
      <main className="App">
        <header>BAR CART</header>
        <Switch>
          <Route exact path='/' render={() => <Homepage ingredientsList={this.state.ingredientsList} selectFilter={this.selectFilter} filter={this.state.filter} filteredRecipes={this.state.filteredRecipes}/>}/> 
          <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites}/>} />
          <Route exact path='/:id' render={({ match }) => <CocktailDetails id={match.params.id} addToFavorites={this.addToFavorites}/>}/>
        </Switch>
      </main>
    );
  };
};

export default App;

