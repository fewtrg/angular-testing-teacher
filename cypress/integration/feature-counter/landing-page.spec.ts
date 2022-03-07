// LAB: See if you can write a spec that:

// Starts at "/".
describe('Counter Feature', () => {
  describe('Navigating to the Counter Feature', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('can navigate to the counter feature', () => {
      // Finds the link to the counter.
      cy.clickNavigationLinkTo('Redux Counter');
      // cy.get(`[data-front-end-navigation] li`).eq(1).click();
      // Clicks it.
      // verifies the URL is /counter/ui
      cy.url().should('match', /\/counter\/ui$/);
    });
  });

  // Is is showing the right component...
});
