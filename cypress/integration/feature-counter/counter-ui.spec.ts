describe('The Counter Ui', () => {
  beforeEach(() => {
    cy.visit('/counter/ui');
  });
  const componentName = '[data-counter-counter-ui]';
  describe('Initial State', () => {
    it('has a current of zero', () => {
      cy.get(componentName)
        .get('[data-test-id="current"]')
        .should('have.text', '0');
    });
    it('should have the decrement and reset buttons disabled', () => {
      cy.get(componentName).get('[data-test-id="reset"').should('be.disabled');

      cy.get(componentName)
        .get('[data-test-id="decrement"]')
        .should('be.disabled');
    });
    it('should have the increment enabled', () => {
      cy.get(componentName)
        .get('[data-test-id="increment"]')
        .should('be.enabled');
    });
  });
  describe('Increment', () => {
    beforeEach(() => {
      cy.get(componentName).get('[data-test-id="increment"').click();
    });
    it('should increment the count when you click the increment button', () => {
      cy.get(componentName)
        .get('[data-test-id="current"]')
        .should('have.text', '1');

      cy.get(componentName).get('[data-test-id="increment"').click();

      cy.get(componentName)
        .get('[data-test-id="current"]')
        .should('have.text', '2');
    });
    it('should allow reset after we increment', () => {
      cy.get(componentName).get('[data-test-id="increment"').click();
      cy.get(componentName).get('[data-test-id="reset"').should('be.enabled');
    });
    it('should allow decrement after increment is clicked', () => {
      cy.get(componentName)
        .get('[data-test-id="decrement"')
        .should('be.enabled');
    });
  });

  describe('Decrement', () => {
    beforeEach(() => {
      cy.get(componentName).get('[data-test-id="increment"').click();
      cy.get(componentName).get('[data-test-id="increment"').click();
      cy.get(componentName).get('[data-test-id="increment"').click();
    });
    it('should reduce the counter when decrement is clicked', () => {
      cy.get(componentName).get('[data-test-id="decrement"').click();
      cy.get(componentName)
        .get('[data-test-id="current"]')
        .should('have.text', '2');
    });
  });
});
