// Métodos e seletores da tela de Login
class FillLoginPage {
    fillLogin(username, password) {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-button"]').click();
    }
}

module.exports = new FillLoginPage();