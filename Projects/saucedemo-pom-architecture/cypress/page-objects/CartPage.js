class CartPage {
    goToCheckout(){
        cy.get('[data-test="checkout"]').click();
    }
}

module.exports = new CartPage();
