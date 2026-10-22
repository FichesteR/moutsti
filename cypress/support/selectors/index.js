export const loginSelectors = {
    email: 'input[name="email"]',
    password: 'input[name="password"]',
    submit: '[data-testid="entrar"]',
    alert: '.alert',
};

export const cadastroSelectors = {
    nome: 'input[name="nome"]',
    email: 'input[name="email"]',
    password: 'input[name="password"]',
    checkboxAdmin: 'input[name="administrador"]',
    submit: '[data-testid="cadastrar"]',
};

export const homeSelectors = {
    listaProdutos: '.card.col-3',
    nomeProduto: 'h5.card-title',
    precoProduto: 'h6.card-subtitle:contains("$")',
    btnAdicionarLista: '[data-testid="adicionarNaLista"]',
    logoutBtn: '[data-testid="logout"]',
};