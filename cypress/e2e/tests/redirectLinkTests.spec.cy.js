import { RedirectLinkPage } from "../pageObjects/RedirectLinkPage";

const redirectLinkPage = new RedirectLinkPage();

describe("Validate Redirect Link component", () => {

  beforeEach(() => {
    redirectLinkPage.open();
  });

  it("Verify Redirect Link page content", () => {
    redirectLinkPage.verifyContent();
  });

  it("Verify that when clicking redirect link redirect is happened", () => {
      cy.intercept('GET', '/redirect').as('getRequest');

      redirectLinkPage.openRedirectLink();

      //checking that actual redirect is happened and the location from redirect request matches the current url
      cy.wait('@getRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(302); 
        expect(interception.response.headers).to.have.property('location');
        const location = interception.response.headers.location;
        cy.url().should('eq', location);
      });  
  });
});
