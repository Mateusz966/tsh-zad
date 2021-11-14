/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

context('HomePage should', () => {
  beforeEach(() => {
    cy.visit(Cypress.env().baseUrl);
  });

  it('Displays products page', () => {
    cy.clearSession();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
    cy.get('[data-testid=products-wrapper]').should('exist');
  });


  it('Search given phrase', () => {
    cy.get('[data-testid=search-input]').type('hard to find name should return empty bag lets add extra #@#!@$S words');
    cy.get('[data-testid=empty-list]').should('exist');
  });

  it('Filtering products based on selected filters', () => {
    cy.get('[data-testid=promo-filter]').click();
    cy.get('[data-testid=product-card]').each((item) =>
      cy.wrap(item).should('contain.text', 'Promo'))
  });

  it('If user not logged show login button and redirect to login', () => {
    cy.reload();
    cy.get('[data-testid=redirect-to-login]').click();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });

  it('Show modal after click show details button', () => {
    cy.get('[data-testid=active-filter]').click();
    cy.get('[data-testid=show-details-btn]').first().click();
    cy.get('.chakra-modal__overlay').should('exist');
  });

});
