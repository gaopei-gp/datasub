describe('Request A Quote Form - Invalid Submission', () => {
  it('should submit the form unsuccessfully with invalid data', () => {
    cy.visit('https://qatest.datasub.com/');
    cy.get('#name').type('Gao Pei');
    cy.get('#email').type('gpei_email'); // input an email without @
    cy.get('#service').select('B Service');
    cy.get('#purposeBusiness').check();
    cy.get('#withdrawCash').check();
    cy.get('#message').type('123456');

    cy.get('#formStatus').should('not.be.visible');
    cy.get('button[type="submit"]').first().click();
    cy.get('#formStatus').should('not.be.visible'); // when with invalid email input the form can't be submitted.

  });
});