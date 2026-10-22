describe('API - Login', () => {
    it('POST /login deve retornar Bearer token', () => {
        cy.criarUsuarioAPI({ password: 'minhasenha' }).then((user) => {
            cy.request({
                method: 'POST',
                url: `${Cypress.config('apiBaseUrl')}/login`,
                body: { email: user.email, password: user.password },
            }).then((resp) => {
                expect(resp.status).to.eq(200);
                expect(resp.body.authorization).to.match(/^Bearer /);
            });
        });
    });
});