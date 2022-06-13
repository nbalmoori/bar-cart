describe('Details page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {fixture: './ingredients.json'})
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey', {fixture: './whiskey.json'})
      .visit('http://localhost:3000/')
      cy.get('#Whiskey').click()
      cy.get('#13194').click()
  });

  it('should display the cocktail information', () => {
    cy.url('http://localhost:3000/13200')
    cy.get('.cocktailDetails').contains('Damned if you do')
    cy.get('.cocktailDetails').contains('Ingredients: Whiskey: 0.75 oz , Hot Damn: 0.25 oz')
    cy.get('.cocktailDetails').contains('Instructions: Pour into shot glass. Put in mouth. Repeat as deemed necessary.')
    cy.get('.cocktailDetails').contains('Glassware: Shot glass')
    cy.get('.detailsImage').should('have.attr', 'src').should('include', 'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg')
  });

  it('should have a button to return to the homepage', () => {
    cy.get('.homeButton')
      .should('have.text', 'Return Home')
      .click().url('http://localhost:3000/')
  });

  it('should have a button to link to the favorites page', () => {
    cy.get('.favoriteViewButton')
      .should('have.text', 'View Your Favorite Cocktails')
      .click().url('http://localhost:3000/favorites')
  });

  it('should have a button to favorite a cocktail', () => {
    cy.get('.addToFavoritesButton')
      .should('have.text', 'Add to Favorites')
  });
});