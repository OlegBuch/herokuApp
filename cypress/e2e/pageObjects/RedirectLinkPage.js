import { pathes } from "../appConstants";

export class RedirectLinkPage {

  //elements
  get redirectLinkLabel() { return cy.contains('h3', 'Redirection'); }  
  get redirectLink() { return cy.get('a#redirect'); }  
  get statusCodesLabel() { return cy.contains('h3', 'Status Codes'); }
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }  
  
  open() {
    cy.visit(pathes.redirectLink)
    this.redirectLinkLabel.should('be.visible');
  }

  verifyContent() {
    this.redirectLinkLabel.should('be.visible');
    this.redirectLink.should('be.visible');
    this.pageFooter.should('be.visible');
  }

  openRedirectLink() {
    this.redirectLink.click();
    this.statusCodesLabel.should('be.visible');
  }
}
