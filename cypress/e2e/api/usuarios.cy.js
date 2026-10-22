describe('API - Usuários', () => {
    it('POST /usuarios deve criar usuário e retornar _id', () => {
        const ts = Date.now();
        cy.request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/usuarios`,
            body: {
                nome: 'Usuário API',
                email: `api_${ts}@teste.com`,
                password: 'teste123',
                administrador: 'true',
            },
        }).then((resp) => {
            expect(resp.status).to.eq(201);
            expect(resp.body).to.have.property(
                'message',
                'Cadastro realizado com sucesso'
            );
            expect(resp.body._id).to.be.a('string').and.not.empty;
        });
    });
});