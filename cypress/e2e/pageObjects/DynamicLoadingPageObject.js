import { paths } from "../appConstants";

export class DynamicLoadingPageObject {

  // Elements
  get dynamicLoadingLabel() { return cy.contains("h3", "Dynamically Loaded Page Elements"); }
  get hiddenElementLoadingLink() { return cy.contains("a", "Example 1"); }
  get notAttachedElementLoadingLink() { return cy.contains("a", "Example 2"); }
  get startButton() { return cy.contains("button", "Start"); }
  get loadingBar() { return cy.get("#loading"); }
  get loadingBarImage() { return cy.get("#loading img"); }
  get targetElement() { return cy.get("#finish"); }
  get pageFooter() { return cy.contains("#page-footer", "Powered by Elemental Selenium"); }

  open() {
    cy.visit(paths.dynamicLoading);
    this.dynamicLoadingLabel.should("be.visible");
  }

  openLink(link) {
    link.click();
    this.startButton.should("be.visible");
  }

  checkContent() {
    this.dynamicLoadingLabel.should("be.visible");
    this.hiddenElementLoadingLink.should("be.visible");
    this.notAttachedElementLoadingLink.should("be.visible");
    this.pageFooter.should("be.visible");
  }

  load() {
    this.startButton.click();
    this.loadingBar.should("be.visible", { timeout: 10000 });
  }

  checkTargetElementVisible() {
    this.targetElement.should("be.visible", { timeout: 10000 });
  }

  checkTargetElementHidden() {
    this.targetElement.should("exist",{ timeout: 10000 });
    this.targetElement.should("not.be.visible", { timeout: 10000 });
  }

  checkTargetElementNotAttached() {
    this.targetElement.should("not.exist", { timeout: 10000 });
  }

  checkLoadingBarAppearance() {
    this.startButton.click();
    this.loadingBar.should("be.visible", { timeout: 10000 }).and("contain.text", "Loading...");
    this.loadingBarImage.should("have.attr", "src", "/img/ajax-loader.gif", { timeout: 10000 });
  }
}
