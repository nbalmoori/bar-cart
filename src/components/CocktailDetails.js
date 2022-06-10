import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getFetch, { dataCocktailCleaner } from '../apiCalls';
import '../styling/CocktailDetails.css';

class CocktailDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      details: {}
    };
  };

  componentDidMount = () => {
    getFetch(`lookup.php?i=${this.state.id}`)
    .then(data => dataCocktailCleaner(data))
    .then(data => this.setState({details: data}))
  };

  render = () => {
    return <div>
      <Link to={`/`}> <button>Home</button> </Link>
      <h1>{this.state.details.name}</h1>
      <p>Ingredients: {this.state.details.ingredients}</p>
      <p>Instructions: {this.state.details.instructions}</p>
      <p>Glass: {this.state.details.glass}</p>
      <img src={this.state.details.image}/>
      <button onClick={() => this.props.addToFavorites(this.state.details)}>Add to Favorites</button>
    </div>
  };
};

export default CocktailDetails;