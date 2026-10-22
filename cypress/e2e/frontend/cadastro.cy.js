import { faker } from '@faker-js/faker/locale/pt_BR';
import { cadastroSelectors } from '../../support/selectors';

describe('Frontend - Cadastro', () => {
    it('deve cadastrar novo usuário com sucesso', () => {
        // Dados dinâmicos evitam conflito de "email já cadastrado"

        const nome = faker.person.fullName();
        const email = faker.internet.email().toLowerCase();

        cy.visit('/cadastrarusuarios');
        cy.get(cadastroSelectors.nome).type(nome);
        cy.get(cadastroSelectors.email).type(email);
        cy.get(cadastroSelectors.password).type('Teste@123');
        // Marca como administrador para ter acesso completo
        cy.get(cadastroSelectors.checkboxAdmin).check();
        cy.get(cadastroSelectors.submit).click();

        // Asserção principal: mensagem de sucesso visível
        cy.contains('Cadastro realizado com sucesso').should('be.visible');
        // Asserção secundária: permanece na página de cadastro
        cy.url().should('include', '/cadastrarusuarios');
    });
});