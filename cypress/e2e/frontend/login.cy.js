import { loginSelectors } from '../../support/selectors';

describe('Frontend - Login', () => {
    it('deve exibir erro com credenciais inválidas', () => {
        cy.visit('/login');
        cy.get(loginSelectors.email).type('naoexiste@teste.com');
        cy.get(loginSelectors.password).type('errada');
        cy.get(loginSelectors.submit).click();

        cy.get(loginSelectors.alert)
            .should('be.visible')
            .and('contain', 'Email e/ou senha inválidos');
        cy.url().should('include', '/login');
    });
});