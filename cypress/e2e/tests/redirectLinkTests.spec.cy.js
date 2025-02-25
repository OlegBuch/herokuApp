import { RedirectLinkPageObject } from "../pageObjects/RedirectLinkPageObject";

const expectedUrl200 = 'https://the-internet.herokuapp.com/status_codes/200';
const expectedUrl301 = 'https://the-internet.herokuapp.com/status_codes/301';
const expectedUrl404 = 'https://the-internet.herokuapp.com/status_codes/404';
const expectedUrl500 = 'https://the-internet.herokuapp.com/status_codes/500';

const redirectLinkPage = new RedirectLinkPageObject();

describe("Check that Redirect Link component works", () => {

    beforeEach(() => {
        redirectLinkPage.open();  // Open the page before each test
    });

    it("Check that Redirect Link page content works", () => {
        // Verify that the page content is visible
        redirectLinkPage.checkContent();
    });

    it("Check that clicking redirect link redirects us to the correct page", () => {
        cy.intercept('GET', '/redirect').as('getRequest');  // Intercept the redirect request

        redirectLinkPage.openRedirectLink();  // Click on the redirect link

        // Wait for the redirect request and validate the response
        cy.wait('@getRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);  // Check for redirect status
            expect(interception.response.headers).to.have.property('location');  // Check that location header exists
            const location = interception.response.headers.location;
            // Verify that the current URL matches the redirect location
            cy.url().should('eq', location);

        });
    });


    it("Check that clicking 200 status link redirects us to the correct page", () => {
        redirectLinkPage.openRedirectLink();  // Open the page and click on the link that initiates the redirect

        cy.intercept('GET', '/status_codes/200').as('getRequest200');  // Intercept the 200 request

        redirectLinkPage.clickStatusCode(200);

        // Wait for the intercepted request
        cy.wait('@getRequest200').then((interception) => {
            // Ensure status code is 200
            expect(interception.response.statusCode).to.eq(200);
            // Check the request URL (this should be the full URL for the 200 status code)
            expect(interception.request.url).to.eq(expectedUrl200);
        });
    });

    it("Check that clicking 301 status link redirects us to the correct page", () => {
        redirectLinkPage.openRedirectLink();  // Open the page and click on the link that initiates the redirect

        cy.intercept('GET', '/status_codes/301').as('getRequest301');  // Intercept the 200 request

        redirectLinkPage.clickStatusCode(301);

        // Wait for the intercepted request
        cy.wait('@getRequest301').then((interception) => {
            // Ensure status code is 301
            expect(interception.response.statusCode).to.eq(301);
            // Check the request URL (this should be the full URL for the 301 status code)
            expect(interception.request.url).to.eq(expectedUrl301);
        });
    });

    it("Check that clicking 404 status link shows a 404 error", () => {
        redirectLinkPage.openRedirectLink();  // Open the page and click on the link that initiates the redirect

        cy.intercept('GET', '/status_codes/404').as('getRequest404');  // Intercept the 200 request

        redirectLinkPage.clickStatusCode(404);

        // Wait for the intercepted request
        cy.wait('@getRequest404').then((interception) => {
            // Ensure status code is 404
            expect(interception.response.statusCode).to.eq(404);
            // Check the request URL (this should be the full URL for the 200 status code)
            expect(interception.request.url).to.eq(expectedUrl404);
        });
    });

    it("Check that clicking 500 status link shows a 500 error", () => {
        redirectLinkPage.openRedirectLink();  // Open the page and click on the link that initiates the redirect

        cy.intercept('GET', '/status_codes/500').as('getRequest500');  // Intercept the 200 request

        redirectLinkPage.clickStatusCode(500);

        // Wait for the intercepted request
        cy.wait('@getRequest500').then((interception) => {
            // Ensure status code is 200
            expect(interception.response.statusCode).to.eq(500);
            // Check the request URL (this should be the full URL for the 200 status code)
            expect(interception.request.url).to.eq(expectedUrl500);
        });
    });
});
