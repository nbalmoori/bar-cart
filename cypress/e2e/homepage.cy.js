describe('Homepage', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {fixture: './ingredients.json'})
      .visit('http://localhost:3000/')
  })

  it('should display the homepage when the page loads', () => {
    cy.url('http://localhost:3000/')
    cy.get('.homepageTitle')
      .should('have.text', 'BAR CART')
    cy.get('.homepageDescription')
      .should('have.text', 'Find inspiration to create a signature cocktail with an ingredient you already have on hand! No clue what to make with that bottle of spiced rum you were gifted? Have too many lemons that you need to use up? We have the perfect cocktail recipe waiting for you! All you have to do is scroll below to see a list of ingredients to choose from. Once you click on an ingredient, a list of cocktails that utilize that ingredient will display below. If one of the cocktails peaks your interest, click on it to find out more. Cheers!')

  })
})