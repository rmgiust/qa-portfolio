const FillLoginPage = require('../page-objects/LoginPage')

describe('Realizando login válido e inválido', () => {
    beforeEach(() => {
        cy.visit('/');
            })
            it('Visitar a página de login com sucesso', () => {
                cy.fixture('credentials').then((data) => {
                    FillLoginPage.fillLogin(data.validLogin, data.validPassword);
                    cy.url().should('include', '/inventory.html');
                    });
                });
            
            it('Error ao inserir username e/ou password inválidos', () => {
                cy.fixture('credentials').then((data) => {
                    FillLoginPage.fillLogin(data.invalidLogin, data.invalidPassword);
                    cy.get('[data-test="error"]').should('be.visible');
        });
    });
});
