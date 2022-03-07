describe('The Application Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('default route', () => {
    it('should default to the dashboard', () => {
      cy.url().should('match', /\/dashboard$/); // the url should END WITH /dashboard
    });
    it('marks the dashboard link in the navigation ui as active', () => {
      cy.get(`[data-front-end-navigation]`)
        .get('li')
        .eq(0)
        .should('has.text', 'Dashboard')
        .get('a')
        .should('have.class', 'active');
    });
    it('should have the rest of links', () => {
      cy.get(`[data-front-end-navigation] li`)
        .eq(1)
        .should('have.text', 'Redux Counter');

      cy.get(`[data-front-end-navigation] li`)
        .eq(2)
        .should('have.text', 'Redux Shopping');
    });
  });
});
