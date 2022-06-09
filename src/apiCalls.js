const getFetch = (address) => {

  return fetch(`https://www.thecocktaildb.com/api/json/v1/1/${address}`)
  .then(response => response.json())

}


export default getFetch;