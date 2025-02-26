/*
import { paths } from "../appConstants";

export class RedirectLinkPageObject {

  // Elements
  get redirectLinkLabel() { return cy.contains('h3', 'Redirection'); }
  get redirectLink() { return cy.get('a#redirect'); }
  get statusCodesLabel() { return cy.contains('h3', 'Status Codes'); }
  get status200Link() { return cy.contains('a', '200'); }  // Assuming status 200 link has the text "200"
  get status301Link() { return cy.contains('a', '301'); }  // Same for 301, 404, 500
  get status404Link() { return cy.contains('a', '404'); }
  get status500Link() { return cy.contains('a', '500'); }
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }

  // Open the page
  open() {
    cy.visit(paths.redirectLink);
    this.redirectLinkLabel.should('be.visible', { timeout: 5000 });
  }

  // Check content visibility
  checkContent() {
    this.redirectLinkLabel.should('be.visible', { timeout: 5000 });
    this.redirectLink.should('be.visible', { timeout: 5000 });
    this.pageFooter.should('be.visible', { timeout: 5000 });
  }

  // Open the redirect link
  openRedirectLink() {
    this.redirectLink.click();
    this.statusCodesLabel.should('be.visible', { timeout: 5000 });
  }

  // Click on each status code link
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
*/

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
