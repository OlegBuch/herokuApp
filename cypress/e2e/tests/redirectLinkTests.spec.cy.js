import { RedirectLinkPageObject } from "../pageObjects/RedirectLinkPageObject";

const expectedUrl200 = 'https://the-internet.herokuapp.com/status_codes/200';
const expectedUrl301 = 'https://the-internet.herokuapp.com/status_codes/301';
const expectedUrl404 = 'https://the-internet.herokuapp.com/status_codes/404';
const expectedUrl500 = 'https://the-internet.herokuapp.com/status_codes/500';

const redirectLinkPage = new RedirectLinkPageObject();

describe("Check that Redirect Link component works", () => {

    beforeEach(() => {
        redirectLinkPage.open();
        redirectLinkPage.redirectLinkLabel.should('be.visible', { timeout: 5000 });
    });

    it("Check that Redirect Link page content works", () => {
        redirectLinkPage.redirectLinkLabel.should('be.visible', { timeout: 5000 });
        redirectLinkPage.redirectLink.should('be.visible', { timeout: 5000 });
        redirectLinkPage.pageFooter.should('be.visible', { timeout: 5000 });
    });

    it("Check that clicking redirect link redirects to the correct page", () => {
        cy.intercept('GET', '/redirect').as('getRequest');

        redirectLinkPage.clickRedirectLink();

        cy.wait('@getRequest').then((interception) => {
            expect(interception.response.statusCode).to.eq(302);
            expect(interception.response.headers).to.have.property('location');
            const location = interception.response.headers.location;
            cy.url().should('eq', location);
        });

        redirectLinkPage.statusCodesLabel.should('be.visible', { timeout: 5000 });
    });

    it("Check that clicking 200 status link redirects to the correct page", () => {
        redirectLinkPage.clickRedirectLink();
        cy.intercept('GET', '/status_codes/200').as('getRequest200');

        redirectLinkPage.clickStatusCode(200);

        cy.wait('@getRequest200').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.url).to.eq(expectedUrl200);
        });
    });

    it("Check that clicking 301 status link redirects to the correct page", () => {
        redirectLinkPage.clickRedirectLink();
        cy.intercept('GET', '/status_codes/301').as('getRequest301');

        redirectLinkPage.clickStatusCode(301);

        cy.wait('@getRequest301').then((interception) => {
            expect(interception.response.statusCode).to.eq(301);
            expect(interception.request.url).to.eq(expectedUrl301);
        });
    });

    it("Check that clicking 404 status link shows a 404 error", () => {
        redirectLinkPage.clickRedirectLink();
        cy.intercept('GET', '/status_codes/404').as('getRequest404');

        redirectLinkPage.clickStatusCode(404);

        cy.wait('@getRequest404').then((interception) => {
            expect(interception.response.statusCode).to.eq(404);
            expect(interception.request.url).to.eq(expectedUrl404);
        });
    });

    it("Check that clicking 500 status link shows a 500 error", () => {
        redirectLinkPage.clickRedirectLink();
        cy.intercept('GET', '/status_codes/500').as('getRequest500');

        redirectLinkPage.clickStatusCode(500);

        cy.wait('@getRequest500').then((interception) => {
            expect(interception.response.statusCode).to.eq(500);
            expect(interception.request.url).to.eq(expectedUrl500);
        });
    });

});
