/// <reference types="Cypress" />

const { baseUrl } = require('../env');

context('Album', () => {
  it('Should play a track with no error', () => {
    cy.visit(`${baseUrl}cupid-deluxe`);

    cy.get('.product__track')
    .first()
    .click();

    cy.get('.product__image--playing')
      .should('have.length', 1);

    cy.get('audio')
      .should(([el]) => {
        expect(el.duration > 0 && !el.paused && !el.muted).to.eq(true);
      });
  });

  it('Should go back to home', () => {
    cy.visit(`${baseUrl}cupid-deluxe`);

    cy.get('.back')
    .click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/');
    });
  });

  it('Should enter in album with no preview and not play a track', () => {
    cy.visit(`${baseUrl}good-kid-maad-city`);

    cy.get('.product__track')
    .should('have.length.gt', 0)

    cy.get('.product__track')
    .first()
    .should($el => $el.click());
    
    cy.get('.product__image--playing')
      .should('have.length', 0);

    cy.get('audio')
    .should('have.length', 0);
  });
  
});
