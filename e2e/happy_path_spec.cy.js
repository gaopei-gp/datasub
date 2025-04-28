describe('Request A Quote Form - Valid Submission', () => {
  it('should submit the form successfully with valid data', () => {
    cy.visit('https://qatest.datasub.com/');
    cy.get('#name').type('Gao Pei');
    cy.get('#email').type('gpei@test.com');
    cy.get('#service').select('B Service');
    cy.get('#purposeBusiness').check();
    cy.get('#withdrawCash').check();
    cy.get('#message').type('123456');

    cy.get('#formStatus').should('not.be.visible');
    cy.get('button[type="submit"]').first().click();
    cy.get('#formStatus').should('be.visible').and('have.text', 'Форма отправлена.'); // form submitted successfully.

  });
});