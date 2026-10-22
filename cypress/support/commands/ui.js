import { loginSelectors } from '../selectors';

Cypress.Commands.add('loginViaUI', (email, password) => {
    cy.visit('/login');
    // cy.get(loginSelectors.email).type(email);
    cy.get(loginSelectors.password).type(password, { log: false });
    cy.get(loginSelectors.submit).click();
});