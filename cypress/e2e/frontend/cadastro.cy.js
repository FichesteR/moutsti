import { faker } from '@faker-js/faker/locale/pt_BR';
import { cadastroSelectors } from '../../support/selectors';

describe('Frontend - Cadastro', () => {
    it('deve cadastrar novo usuário com sucesso', () => {
        const nome = faker.person.fullName();
        const email = faker.internet.email().toLowerCase();

        cy.visit('/cadastrarusuarios');
        cy.get(cadastroSelectors.nome).type(nome);
        cy.get(cadastroSelectors.email).type(email);
        cy.get(cadastroSelectors.password).type('Teste@123');
        cy.get(cadastroSelectors.checkboxAdmin).check();
        cy.get(cadastroSelectors.submit).click();

        // Asserção alinhada ao comportamento real do frontend
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        cy.url().should('include', '/cadastrarusuarios');
    });
});