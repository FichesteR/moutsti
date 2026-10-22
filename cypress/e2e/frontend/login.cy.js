import { loginSelectors } from '../../support/selectors';

describe('Frontend - Login', () => {
    it('deve exibir erro com credenciais inválidas', () => {
        cy.visit('/login');
        // Credenciais que sabidamente não existem
        cy.get(loginSelectors.email).type('naoexiste@teste.com');
        cy.get(loginSelectors.password).type('errada');
        cy.get(loginSelectors.submit).click();

        // Alerta de erro deve aparecer com a mensagem da API
        cy.get(loginSelectors.alert)
            .should('be.visible')
            .and('contain', 'Email e/ou senha inválidos');
        // Confirma que o usuário NÃO foi redirecionado para /home
        cy.url().should('include', '/login');
    });
});