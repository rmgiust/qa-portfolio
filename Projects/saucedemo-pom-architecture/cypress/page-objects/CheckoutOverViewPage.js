class checkoutOverViewPage {
    confirmCheckout(){
        cy.get('[data-test="finish"]').click();
    }
}

module.exports = new checkoutOverViewPage();

