import { paths } from "../appConstants";

export class DynamicLoadingPageObject {

  // Elements
  get dynamicLoadingLabel() {
    return cy.contains("h3", "Dynamically Loaded Page Elements");
  }

  get hiddenElementLoadingLink() {
    return cy.contains("a", "Example 1");
  }

  get notAttachedElementLoadingLink() {
    return cy.contains("a", "Example 2");
  }

  get startButton() {
    return cy.contains("button", "Start");
  }

  get loadingBar() {
    return cy.get("#loading");
  }

  get loadingBarImage() {
    return cy.get("#loading img");
  }

  get targetElement() {
    return cy.get("#finish");
  }

  get pageFooter() {
    return cy.contains("#page-footer", "Powered by Elemental Selenium");
  }

  open() {
    cy.visit(paths.dynamicLoading);
  }

  openLink(link) {
    link.click();
  }

  clickStartButton() {
    this.startButton.click();
  }

  getLoadingBar() {
    return this.loadingBar;
  }

  getLoadingBarImage() {
    return this.loadingBarImage;
  }

  getTargetElement() {
    return this.targetElement;
  }
}

