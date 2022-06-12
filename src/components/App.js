import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import getFetch, { dataFilterCleaner, dataIngredientsCleaner } from '../apiCalls';
import Homepage from './Homepage';
import CocktailDetails from './CocktailDetails';
import Favorites from './Favorites';
import Error from './Error';
import '../styling/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsList: [],
      filter: "",
      filteredCocktails: [],
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
    .then(data => this.setState({filteredCocktails: data}))
  };

  addToFavorites = (cocktail) => {
    if (!this.state.favorites.includes(cocktail)) {
      this.setState({favorites: [...this.state.favorites, cocktail]})
    };
  };

  render() {
    return (
      <main className="App">
        <Switch>
          <Route exact path='/' render={() => <Homepage ingredientsList={this.state.ingredientsList} selectFilter={this.selectFilter} filter={this.state.filter} filteredCocktails={this.state.filteredCocktails}/>}/> 
          <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites}/>} />
          <Route exact path='/:id' render={({ match }) => <CocktailDetails id={match.params.id} addToFavorites={this.addToFavorites}/>}></Route>
          <Route path="*" component={Error}/>
        </Switch>
      </main>
    );
  };
};

export default App;

