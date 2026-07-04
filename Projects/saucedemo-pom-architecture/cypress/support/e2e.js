import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste por erros vindos da aplicação
    return false;
});