import React, { Component } from 'react';
import getFetch, { dataCocktailCleaner } from '../apiCalls';
import '../styling/CocktailDetails.css'

class CocktailDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    }
  }

  componentDidMount = () => {
    getFetch(`lookup.php?i=${this.state.id}`)
    .then(data => dataCocktailCleaner(data))
    .then(data => console.log(data))
  }

  render = () => {
    return <div>hello</div>
  }
}

export default CocktailDetails;