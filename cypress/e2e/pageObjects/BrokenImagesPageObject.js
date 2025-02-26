import { paths } from "../appConstants";

export class BrokenImagesPageObject {
  // Elements
  get brokenImagesLabel() { return cy.contains("h3", "Broken Images"); }
  get firstImage() { return cy.get("div.example img").first(); }
  get secondImage() { return cy.get("div.example img").eq(1); }
  get thirdImage() { return cy.get("div.example img").eq(2); }
  get pageFooter() { return cy.contains("#page-footer", "Powered by Elemental Selenium"); }

  getImage(index) {
    return cy.get("div.example img").eq(index);
  }

  open() {
    cy.visit(paths.brokenImages);
  }

  getImageSrc(image) {
    return image.invoke("attr", "src");
  }

  fetchImageStatus(image) {
    return this.getImageSrc(image).then((src) => {
      return cy.request({ url: src, failOnStatusCode: false }).its("status");
    });
  }
}