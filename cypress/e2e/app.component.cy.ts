describe('Basic test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('app is running!');
  });
});

describe('clicking button changes text displayed', () => {
  it('shows ng add @angular/pw if user clicks pwa button ', () => {
    cy.viewport(783, 628);

    cy.visit('/');
    cy.get(
      'body > app-root > div.content > div:nth-child(8) > button:nth-child(3) > span'
    ).click();
    cy.get('[data-test-id="display"]').find('pre').as('display');
    cy.get('@display').should('exist');
    cy.get('@display').should('contain', 'ng add @angular/pwa');
  });
});

describe('click button to access library pages', () => {
  it('tests click angular material button to visint angular material library page', () => {
    cy.viewport(1440, 629);

    cy.visit('http://localhost:4200/');

    cy.get('[data-test-id=material]').within(() => {
      cy.root()
        .should('exist')
        .and('have.attr', 'href', 'https://material.angular.io');
    });
  });
});
describe('click button to access internal app views', () => {
  it('tests click angular login btn to enter login page', () => {
    cy.viewport(1440, 629);

    cy.visit('http://localhost:4200/');

    cy.get('[data-test-id=login]').within(() => {
      cy.root().should('exist').and('have.attr', 'href', '/login').click();
    });
    cy.get('body > app-root > app-login > h1').should('exist').as('logintitle');
    cy.get('@logintitle').should('contain', 'Login');
  });
});
