/// <reference types="Cypress" />

import { NavigationMenu } from '../../pages/Navigation';

const correctCredentials = {
  username: 'string',
  password: 'string'
};

const incorrectCredentials = {
  username: 'emate',
  password: 'mlodymatczak'
}


context('Login page should', () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env().baseUrl}/login`);
  });

  it('Display login page', () => {
    cy.clearSession();
    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.loginLink);
    });
  });

  it('When login fields are empty should throw error', () => {
    cy.get('[data-testid=login-submit]').click();
    cy.get('[data-testid=username] .chakra-form__error-message')
      .should('exist');
    cy.get('[data-testid=password] .chakra-form__error-message')
      .should('exist');
  });

  it('When login fields are fill with correct credentials should login', () => {
    cy.get('[data-testid=login-submit]').click();

    cy.get('[data-testid=username]').type(correctCredentials.username);
    cy.get('[data-testid=password]').type(correctCredentials.password);
    cy.get('[data-testid=login-submit]').click();

    cy.location().should(loc => {
      expect(loc.href).to.eq(NavigationMenu.homeLink);
    });
  });

  it('When login fields are fill with incorrect credentials should throw errow', () => {
    cy.get('[data-testid=login-submit]').click();

    cy.get('[data-testid=username]').type(incorrectCredentials.username);
    cy.get('[data-testid=password]').type(incorrectCredentials.password);
    cy.get('[data-testid=login-submit]').click();
    cy.get('body').contains('Invalid credentials') // Yield el in .nav containing 'About'

  });

});
