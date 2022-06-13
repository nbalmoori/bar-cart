describe('Homepage', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {fixture: './ingredients.json'})
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey', {fixture: './whiskey.json'})
      .visit('http://localhost:3000/')
  });

  it('should display the homepage header when the page loads', () => {
    cy.url('http://localhost:3000/')
    cy.get('.homepageTitle').should('have.text', 'BAR CART')
    cy.get('.homepageDescription').should('have.text', 'Find inspiration to create a signature cocktail with an ingredient you already have on hand! No clue what to make with that bottle of spiced rum you were gifted? Have too many lemons that you need to use up? We have the perfect cocktail recipe waiting for you! All you have to do is scroll below to see a list of ingredients to choose from. Once you click on an ingredient, a list of cocktails that utilize that ingredient will display below. If one of the cocktails peaks your interest, click on it to find out more. Cheers!')
    cy.get('.homepageImage').should('have.attr', 'src').should('include', 'static/media/homepage.65397f51f6418345e392.jpg')
    cy.get('.homepageImage').should('have.attr', 'alt').should('include', 'Picture of three cocktails')
  });

  it('should display the ingredients view when the page loads', () => {
    cy.get('.ingredientsTitle').should('have.text', 'Choose your Ingredient')
    cy.get('.ingredientsContainer').should('exist')
    cy.get('.ingredient').should('have.length', 3)
    cy.get('#Whiskey').should('exist').contains('Whiskey')
    cy.get('#Vodka').should('exist').contains('Vodka')
    cy.get('#Lemon').should('exist').contains('Lemon')
    cy.get('.ingredient-image').should('have.length', 3)
    cy.get('.ingredient-image').should('have.attr', 'src').should('include', 'https://www.thecocktaildb.com/images/ingredients/Whiskey-Small.png')
  });

  it('should have a button to link to the favorites page', () => {
    cy.get('.favoriteViewButton')
      .should('have.text', 'View Your Favorite Cocktails')
      .click().url('http://localhost:3000/favorites')
  });

  it('should be able to click on an ingredient to load cocktails', () => {
    cy.get('#Whiskey').click()
    cy.get('.filteredCocktailsView').should('exist').contains('The following drinks contain whiskey:')
    cy.get('.cocktail').should('have.length', 3)
    cy.get('#13194').should('exist').contains('Damned if you do')
    cy.get('#178345').should('exist').contains('Hot Toddy')
    cy.get('#13200').should('exist').contains('Owen\'s Grandmother\'s Revenge')
    cy.get('.cocktail-image').should('have.length', 3)
    cy.get('.cocktail-image').should('have.attr', 'src').should('include', 'https://www.thecocktaildb.com/images/media/drink/ql7bmx1503565106.jpg')
  });

  it('should be able to click on a cocktail to see its details page', () => {
    cy.get('#Whiskey').click()
    cy.get('#13194').click().url('http://localhost:3000/13200')
  });
});