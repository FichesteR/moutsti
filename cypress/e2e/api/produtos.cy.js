describe('API - Segurança', () => {
    it('POST /produtos sem token deve retornar 401', () => {
        cy.request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/produtos`,
            // Não falha o teste automaticamente em 401 — queremos validar esse status
            failOnStatusCode: false,
            body: {
                nome: 'Sem Token',
                preco: 10,
                descricao: 'teste',
                quantidade: 1,
            },
        }).then((resp) => {
            // Sem token, a API deve barrar com 401
            expect(resp.status).to.eq(401);
            // Mensagem deve mencionar Token (valida a regra de negócio)
            expect(resp.body.message).to.include('Token');
        });
    });
});