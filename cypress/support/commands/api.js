// Cria um usuário via API e devolve os dados + _id.
// Usado como pré-condição nos testes que precisam de usuário logado,
// evitando depender da UI para preparar estado.
Cypress.Commands.add('criarUsuarioAPI', (userData = {}) => {
    // Timestamp garante unicidade do email entre execuções
    const ts = Date.now();
    const padrao = {
        nome: `QA ${ts}`,
        email: `qa_${ts}@teste.com`,
        password: 'senha123',
        administrador: 'true',
    };
    return cy
        .request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/usuarios`,
            body: { ...padrao, ...userData },
            // failOnStatusCode: false permite inspecionar respostas não-2xx
            failOnStatusCode: false,
        })
        .then((resp) => {
            expect(resp.status).to.eq(201);
            return { ...padrao, ...userData, _id: resp.body._id };
        });
});

// Autentica via API e devolve o token Bearer.
// Usado por testes que precisam consumir rotas protegidas.
Cypress.Commands.add('loginAPI', (email, password) => {
    return cy
        .request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/login`,
            body: { email, password },
        })
        .then((resp) => {
            expect(resp.status).to.eq(200);
            return resp.body.authorization;
        });
});