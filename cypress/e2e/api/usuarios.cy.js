describe('API - Usuários', () => {
    it('POST /usuarios deve criar usuário e retornar _id', () => {
        // Timestamp garante email único a cada execução
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
            // Criação retorna 201
            expect(resp.status).to.eq(201);
            // Mensagem confirma o cadastro
            expect(resp.body).to.have.property(
                'message',
                'Cadastro realizado com sucesso'
            );
            // _id é obrigatório e não pode ser vazio
            expect(resp.body._id).to.be.a('string').and.not.empty;
        });
    });
});