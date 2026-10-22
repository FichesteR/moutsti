describe('API - Login', () => {
    it('POST /login deve retornar Bearer token', () => {
        // Pré-condição: cria um usuário via API para ter credenciais válidas
        cy.criarUsuarioAPI({ password: 'minhasenha' }).then((user) => {
            cy.request({
                method: 'POST',
                url: `${Cypress.config('apiBaseUrl')}/login`,
                body: { email: user.email, password: user.password },
            }).then((resp) => {
                // Login deve retornar 200
                expect(resp.status).to.eq(200);
                // Token deve estar no formato "Bearer <hash>"
                expect(resp.body.authorization).to.match(/^Bearer /);
            });
        });
    });
});