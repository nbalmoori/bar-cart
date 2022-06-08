import React, {Component} from 'react';
import getFetch from '../apiCalls';
import IngredientsContainer from './IngredientsContainer.js'
import '../styling/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ingredientsList: [],
    };
  }

  componentDidMount = () => {
    getFetch('list.php?i=list')
    .then(data => data.drinks.map(ingredient => ingredient.strIngredient1))
    .then(data => this.setState({ingredientsList: data}))
  }

  render() {
    return (
      <main className="App">
        <header>BAR CART</header>
        <IngredientsContainer ingredientsList={this.state.ingredientsList}/>
      </main>
    );
  }
}

export default App;
