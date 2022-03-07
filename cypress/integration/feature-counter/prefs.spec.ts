describe('counter preferences', () => {
  beforeEach(() => {
    cy.visit('/counter');
    cy.get('.nav-link').contains('Your Preferences').click();
  });
  describe('initial state', () => {
    it('should take us to the preferences', () => {
      // you could check the url here.
      cy.url().should('match', /\/counter\/prefs$/);
      // and / or
      cy.get('[data-counter-prefs]').should('exist').should('be.visible');
    });
    it('should be set to one by default', () => {
      cy.get('[data-counter-prefs]')
        .get('button')
        .contains('1')
        .should('be.disabled');

      cy.get('[data-counter-prefs]')
        .get('button')
        .contains('3')
        .should('be.enabled');

      cy.get('[data-counter-prefs]')
        .get('button')
        .contains('5')
        .should('be.enabled');
    });
  });
  describe('changing prefs to 3', () => {
    it('should change the button to disabled and enable the one', () => {
      cy.get('[data-counter-prefs]')
        .get('button')
        .contains('3')
        .click()
        .should('be.disabled');

      cy.get('[data-counter-prefs]')
        .get('button')
        .contains('1')
        // .click() duh!
        .should('be.enabled');

      cy.get('.nav-link').contains('Rad Counting').click();

      cy.get('[data-counter-prefs]').should('not.exist');
      cy.get('[data-counter-counter-ui]').should('exist');

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="increment"')
        .click();

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="current"]')
        .should('have.text', '3');

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="increment"')
        .click();

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="current"]')
        .should('have.text', '6');

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="decrement"')
        .click();

      cy.get('[data-counter-counter-ui]')
        .get('[data-test-id="current"]')
        .should('have.text', '3');
    });
  });
});
