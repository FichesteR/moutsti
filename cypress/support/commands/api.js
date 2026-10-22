Cypress.Commands.add('criarUsuarioAPI', (userData = {}) => {
    const ts = Date.now();
    const padrao = {
        nome: `QA ${ts}`,
        // email: `qa_${ts}@teste.com`,
        password: 'senha123',
        // administrador: 'true',
    };
    return cy
        .request({
            method: 'POST',
            url: `${Cypress.config('apiBaseUrl')}/usuarios`,
            body: { ...padrao, ...userData },
            failOnStatusCode: false,
        })
        .then((resp) => {
            expect(resp.status).to.eq(201);
            return { ...padrao, ...userData, _id: resp.body._id };
        });
});

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