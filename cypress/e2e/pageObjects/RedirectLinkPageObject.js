import { paths } from "../appConstants";

export class RedirectLinkPageObject {

  // Elements
  get redirectLinkLabel() {
    return cy.contains('h3', 'Redirection');
  }

  get redirectLink() {
    return cy.get('a#redirect');
  }

  get statusCodesLabel() {
    return cy.contains('h3', 'Status Codes');
  }

  get status200Link() {
    return cy.contains('a', '200');
  }

  get status301Link() {
    return cy.contains('a', '301');
  }

  get status404Link() {
    return cy.contains('a', '404');
  }

  get status500Link() {
    return cy.contains('a', '500');
  }

  get pageFooter() {
    return cy.contains('#page-footer', "Powered by Elemental Selenium");
  }

  // Open the redirect page
  open() {
    cy.visit(paths.redirectLink);
  }

  // Click on redirect link
  clickRedirectLink() {
    this.redirectLink.click();
  }

  // Click on status code links
  clickStatusCode(statusCode) {
    switch (statusCode) {
      case 200:
        this.status200Link.click();
        break;
      case 301:
        this.status301Link.click();
        break;
      case 404:
        this.status404Link.click();
        break;
      case 500:
        this.status500Link.click();
        break;
      default:
        throw new Error("Invalid status code");
    }
  }
}
