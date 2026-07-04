const InventoryPage = require ('../page-objects/InventoryPage.js')
const FillLoginPage = require ('../page-objects/LoginPage.js')
const CartPage = require ('../page-objects/CartPage.js')
const checkoutInformations = require ('../page-objects/CheckoutInformationPage.js')
const checkoutOverViewPage = require ('../page-objects/CheckoutOverViewPage.js')


describe('Jornada de compra do login ao pagamento', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('credentials').then((data) => {
            FillLoginPage.fillLogin(data.validLogin, data.validPassword);
            cy.url().should('include', '/inventory.html');
        })
        })
            it ('Adicionando produto ao carrinho', () => {
                const productId = 'sauce-labs-onesie';
                const productText = 'Sauce Labs Onesie';
                InventoryPage.addProductsToCart(productId);
                cy.get(`[data-test="remove-${productId}"]`).should('be.visible');
                InventoryPage.goToCart();
                cy.url().should('include', '/cart.html');
                CartPage.goToCheckout();
                cy.url().should('include', '/checkout-step-one.html');
                checkoutInformations.userInformations('Teste QA', 'da Silva', '101010-10');
                cy.url().should('include', '/checkout-step-two.html');
                cy.get('[data-test="inventory-item-name"]').should('contain', `${productText}`);
                checkoutOverViewPage.confirmCheckout();
                cy.url().should('include', '/checkout-complete.html');
                })
});
