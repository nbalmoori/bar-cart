describe('Favorites', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {fixture: './ingredients.json'})
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey', {fixture: './whiskey.json'})
      .visit('http://localhost:3000/')
      cy.get('#Whiskey').click()
      cy.get('#13194').click()
      cy.get('.addToFavoritesButton').click()
      cy.get('.homeButton').click()
      cy.get('#178345').click()
      cy.get('.addToFavoritesButton').click()
      cy.get('.favoriteViewButton').click()
   });

    it('should display the favorites page', () => {
      cy.url('http://localhost:3000/favorites')
      cy.get('h1').should('have.text', 'Favorite Recipes')
      cy.get('.favoriteCocktails').should('exist')
      cy.get('.cocktail').should('have.length', 2)
      cy.get('#13194').should('exist').contains('Damned if you do')
      cy.get('#178345').should('exist').contains('Hot Toddy')
      cy.get('.cocktail-image').should('have.length', 2)
      cy.get('.cocktail-image').should('have.attr', 'src').should('include', 'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg')
    });

    it('should be able to click on a cocktail to see its details page', () => {
      cy.get('#13194').click().url('http://localhost:3000/13200')
   });

    it('should have a button to return to the homepage', () => {
      cy.get('.homeButton')
        .should('have.text', 'Return Home')
        .click().url('http://localhost:3000/')
   });
});