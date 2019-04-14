/// <reference types="Cypress" />

const { baseUrl } = require('../env');

context('Home', () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Should load page and show albums', () => {
    cy.get('.home__albums')
      .children()
      .its('length')
      .should('be.gt', 0);
  });

  it('Should load page and filter to specific album', () => {
    cy.get('.search__input').type('sex & food');

    cy.get('.home__albums')
      .children()
      .should('have.length', 1);
  });

  it('Should load page and filter to specific album with case insensitive', () => {
    cy.get('.search__input').type('sex & FOOD');

    cy.get('.home__albums')
      .children()
      .should('have.length', 1);
  });

  it('Should load page and redirect to album page with no error', () => {
    cy.get('.search__input').type('sex & FOOD');
    cy.get('.home__albums').children().click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/sex-and-food')
    });
  });
  
});
