import { pathes } from "../appConstants";

export class BrokenImagesPage {
  //elements
  get brokenImagesLabel() { return cy.contains('h3', 'Broken Images'); }  
  get firstImage() { return cy.get('div.example img').first(); } 
  get secondImage() { return cy.get('div.example img').eq(1); } 
  get thirdImage() { return cy.get('div.example img').eq(2); } 
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }  

  open() {
    cy.visit(pathes.brokenImages)
    this.brokenImagesLabel.should('be.visible');
  }
  
  verifyContent() {
    this.brokenImagesLabel.should('be.visible');
    this.firstImage.should('be.visible');
    this.secondImage.should('be.visible');
    this.thirdImage.should('be.visible');
    this.pageFooter.should('be.visible');
  }

  verifyThatImageIsBroken(image) {
    image.invoke('attr', 'src').then((src) => {
      cy.request({ method: 'GET', url: Cypress.config('baseUrl') + src, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.equal(404);
      });
    });
  }

  verifyThatImageIsNotBroken(image) {
    image.invoke('attr', 'src').then((src) => {
      cy.request({ method: 'GET', url: Cypress.config('baseUrl') + src, failOnStatusCode: false }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  }

  verifyThatImageIsBlank(image) {
    image.invoke('attr', 'src').then((src) => {
        expect(src).to.equal("img/avatar-blank.jpg");
    });
  }
}
