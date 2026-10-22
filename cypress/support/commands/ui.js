import { loginSelectors } from '../selectors';

// Faz login pela UI.
// Centralizado aqui porque vários specs precisam autenticar — evita
// duplicar o fluxo e mantém os specs focados no que realmente testam.
Cypress.Commands.add('loginViaUI', (email, password) => {
    cy.visit('/login');
    cy.get(loginSelectors.email).type(email);
    // log: false evita expor a senha no command log do Cypress
    cy.get(loginSelectors.password).type(password, { log: false });
    cy.get(loginSelectors.submit).click();
});