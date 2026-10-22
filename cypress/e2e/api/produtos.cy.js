describe('API - Segurança', () => {
    it('POST /produtos sem token deve retornar 401', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/produtos`,
            failOnStatusCode: false,
            body: {
                nome: 'Sem Token',
                preco: 10,
                descricao: 'teste',
                quantidade: 1,
            },
        }).then((resp) => {
            expect(resp.status).to.eq(401);
            expect(resp.body.message).to.include('Token');
        });
    });
});