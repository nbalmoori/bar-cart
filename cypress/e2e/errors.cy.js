describe ('Error-handling', () => {
  it('Should see an error if fetch for ingredients list returns a 500 error', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {
      statusCode: 500,
    });
    cy.visit('http://localhost:3000/')
    cy.contains('Uh oh! Something went wrong. We are unable to load any ingredients at this time. Please try again later.')
  });

  it('Should see an error if fetch for ingredients list returns a 400 error', () => {
    cy.intercept('GET', 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list', {
      statusCode: 404,
    });
    cy.visit('http://localhost:3000/')
    cy.contains('Uh oh! Something went wrong. We are unable to load any ingredients at this time. Please try again later.')
  });

  it('Should see an error message if visiting favorite page before adding favorites', () => {
    cy.visit('http://localhost:3000/favorites')
    cy.contains('Glass empty! No favorites saved yet.')
    cy.get('button').should('have.text', 'Return Home')
    cy.get('button').click()
    cy.url('http://localhost:3000/')
  });

  it('Should see an error if the url does not exist and user can redirect to homepage', () => {
    cy.visit('http://localhost:3000/potato')
    cy.contains('Error loading details, please try again!')
    cy.get('button').should('have.text', 'Return Home')
    cy.get('button').click()
    cy.url('http://localhost:3000/')
  });
});