// cypress/e2e/frontend/produtos.cy.js
import { homeSelectors } from '../../support/selectors';

describe('Frontend - Produtos', () => {
    it('deve exibir produtos na home após login', () => {
        cy.criarUsuarioAPI({ administrador: 'false' }).then((user) => {
            // O loginViaUI já redireciona para /home
            cy.loginViaUI(user.email, user.password);

            // Aguarda o primeiro card de produto aparecer
            cy.get(homeSelectors.listaProdutos, { timeout: 10000 })
                .should('have.length.greaterThan', 0)
                .first()
                .within(() => {
                    cy.get(homeSelectors.nomeProduto).should('be.visible').and('not.be.empty');
                    cy.get(homeSelectors.precoProduto).should('be.visible');
                    cy.get(homeSelectors.btnAdicionarLista).should('be.visible');
                });
        });
    });
});