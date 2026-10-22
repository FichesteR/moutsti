# Moutsti — Automação Cypress (ServeRest)

Automação E2E e de API para o desafio QA Sênior, usando Cypress.

## Stack

- [Cypress](https://www.cypress.io/) — framework de testes
- [@faker-js/faker](https://fakerjs.dev/) — geração de dados dinâmicos
- [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) — relatório HTML
- GitHub Actions — integração contínua

## Alvos

- Frontend: https://front.serverest.dev
- API: https://serverest.dev

## Cenários

### Frontend (E2E)
1. **Cadastro** — usuário se cadastra com sucesso e é redirecionado para `/home`.
2. **Login inválido** — credenciais erradas exibem alerta e mantêm na `/login`.
3. **Produtos** — após login, home lista produtos com nome e preço.

### API
4. **POST /usuarios** — cria usuário e retorna `_id` + mensagem de sucesso.
5. **POST /login** — autentica e retorna `authorization: Bearer ...`.
6. **POST /produtos sem token** — retorna 401.

## Estrutura
cypress/
├── e2e/
│ ├── frontend/ # 3 specs de UI
│ └── api/ # 3 specs de contrato
├── support/
│ ├── selectors/ # seletores planos (sem Page Object)
│ ├── commands/ # custom commands (UI e API)
│ └── e2e.js

## Decisão arquitetural: sem Page Objects

- Cypress roda no browser e permite preparar estado via `cy.request`,
  eliminando a necessidade de navegar pela UI para pré-condições.
- Seletores ficam em objetos planos (`support/selectors`) — são dados,
  não comportamento.
- Ações repetitivas ficam em Custom Commands (`cy.loginViaUI`,
  `cy.criarUsuarioAPI`), que é o padrão idiomático do Cypress.
- Page Objects adicionariam uma camada OOP que conflita com o design
  encadeado do Cypress, sem ganho de reutilização real.

## Como rodar

```bash
npm ci
npm run cy:open        # modo interativo
npm run cy:run         # headless (gera relatório em cypress-report/)
npm run cy:run:api     # só API
npm run cy:run:front   # só frontend

O relatório HTML fica em cypress-report/index.html.

