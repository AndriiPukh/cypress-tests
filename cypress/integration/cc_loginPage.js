describe("create provider", function () {
    it("create provider", function () {
        cy.visit('https://stage-anywhere.careclix.com/login');
        //log in as SA
        cy.get('.login-form').within(() => {
            cy.get('input[name ="username"]')
        }).type(superadminName);
        cy.get('.login-form').within(() => {
            cy.get('input[name ="password"]')
        }).type(password);
        cy.get('.btn').contains('LOG IN').should('have.class', 'btn').click();
        
    });

});