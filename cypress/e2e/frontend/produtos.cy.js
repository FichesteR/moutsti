import { homeSelectors } from '../../support/selectors';

describe('Frontend - Produtos', () => {
    it('deve exibir produtos na home após login', () => {
        // Pré-condição via API: cria usuário comum (não-admin)
        cy.criarUsuarioAPI({ administrador: 'false' }).then((user) => {
            // Login pela UI já redireciona para /home
            cy.loginViaUI(user.email, user.password);

            // Timeout maior: a lista de produtos carrega via requisição assíncrona
            cy.get(homeSelectors.listaProdutos, { timeout: 10000 })
                .should('have.length.greaterThan', 0)
                .first()
                .within(() => {
                    // Valida a integridade do primeiro card
                    cy.get(homeSelectors.nomeProduto).should('be.visible').and('not.be.empty');
                    cy.get(homeSelectors.precoProduto).should('be.visible');
                    cy.get(homeSelectors.btnAdicionarLista).should('be.visible');
                });
        });
    });
});