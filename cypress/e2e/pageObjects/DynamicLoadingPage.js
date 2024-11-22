import { pathes } from "../appConstants";

export class DynamicLoadingPage {

  //elements
  get dynamicLoadingLabel() { return cy.contains('h3', 'Dynamically Loaded Page Elements'); }  
  get hiddenElementLoadingLink() { return cy.contains('a', 'Example 1'); }  
  get notAttachedElementLoadingLink() { return cy.contains('a', 'Example 2'); }  
  get startButton() { return cy.contains('button', 'Start'); }  
  get loadingBar() { return cy.get('div#loading'); }
  get loadingBarImage() { return cy.get('div#loading').find('img'); }
  get targetElement() { return cy.contains('div#finish', 'Hello World!'); }
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }  
  
  open() {
    cy.visit(pathes.dynamicLoading)
    this.dynamicLoadingLabel.should('be.visible');
  }

  openLink(link) {
    link.click();
    this.startButton.should('be.visible');
  }

  verifyContent() {
    this.dynamicLoadingLabel.should('be.visible');
    this.hiddenElementLoadingLink.should('be.visible');
    this.notAttachedElementLoadingLink.should('be.visible');
    this.pageFooter.should('be.visible');
  }

  load() {
    this.startButton.click();
    this.loadingBar.should('be.visible');
    this.loadingBar.should('not.be.visible');
  }

  verifyTargetElementVisible() {
    this.targetElement.should('be.visible');
  }

  verifyTargetElementHidden() {
    this.targetElement.should('not.be.visible');
  }

  verifyTargetElementNotAttached() {
    this.targetElement.should('not.exist');
  }

  verifyLoadingBarAppearence() {
    this.startButton.click();
    this.loadingBar.should('be.visible');
    this.loadingBar.should('contain.text', 'Loading...');
    this.loadingBarImage.should('have.attr', 'src', '/img/ajax-loader.gif');
  }
}
