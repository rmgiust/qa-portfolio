class InventoryPage {
    checkProducts() {
        cy.get('[data-test="inventory"]');
    }
    addProductsToCart(productName){
        cy.get(`[data-test="add-to-cart-${productName}"]`).click();
    }
    goToCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }
}

module.exports = new InventoryPage();