import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getFetch, { dataCocktailCleaner } from '../apiCalls';
import '../styling/CocktailDetails.css';

class CocktailDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      details: {},
      error: false
    };
  };

  componentDidMount = () => {
    getFetch(`lookup.php?i=${this.state.id}`)
    .then(data => dataCocktailCleaner(data))
    .then(data => this.setState({details: data}))
  };

  render = () => {
    if (!this.state.details.name) {
      return <div> Error loading details, please try again! <Link to={`/`}> <button>Return Home</button> </Link></div>
    } else {
      return (
      <div className="cocktailDetailsView">
        <div className="cocktailDetails">
          <Link to={`/`}> <button className="homeButton">Return Home</button> </Link>
          <Link to={`/favorites`}> <button className="favoriteViewButton">View Your Favorite Cocktails</button> </Link>
          <h1>{this.state.details.name}</h1>
          <p><b>Ingredients:</b> {this.state.details.ingredients}</p>
          <p><b>Instructions</b>: {this.state.details.instructions}</p>
          <p><b>Glassware</b>: {this.state.details.glass}</p>
          <button className="addToFavoritesButton" onClick={() => this.props.addToFavorites(this.state.details)}>Add to Favorites</button>
        </div>
        <img className="detailsImage" src={this.state.details.image}/>
      </div>
      )
    };
  };
};

export default CocktailDetails;