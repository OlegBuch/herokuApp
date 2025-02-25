import { paths } from "../appConstants";

export class BrokenImagesPageObject {
  get firstImage() { return cy.get('div.example img').first(); }
  get secondImage() { return cy.get('div.example img').eq(1); }
  get thirdImage() { return cy.get('div.example img').eq(2); }
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }

  // Elements
  get brokenImagesLabel() {
    return cy.contains("h3", "Broken Images");
  }

  getImage(index) {
    return cy.get("div.example img").eq(index);
  }

  open() {
    cy.visit(paths.brokenImages);
    this.brokenImagesLabel.should("be.visible");
  }

  checkContent() {
    this.brokenImagesLabel.should("be.visible");
    this.getImage(0).should("be.visible");
    this.getImage(1).should("be.visible");
    this.getImage(2).should("be.visible");
    this.pageFooter.should("be.visible");
  }

  checkImageStatus(image, expectedStatus) {
    image.should("have.attr", "src").then((src) => {
      cy.request({ url: src, failOnStatusCode: false }).its("status").should("eq", expectedStatus);
    });
  }

  checkThatImageIsBroken(image) {
    this.checkImageStatus(image, 404);
  }

  checkThatImageIsNotBroken(image) {
    this.checkImageStatus(image, 200);
  }

  checkThatImageIsBlank(image) {
    image.invoke("attr", "src").should("eq", "img/avatar-blank.jpg");
  }
}
