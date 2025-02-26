import { BrokenImagesPageObject } from "../pageObjects/BrokenImagesPageObject";

const brokenImagesPage = new BrokenImagesPageObject();

describe("Check that Broken Images component works", () => {

  beforeEach(() => {
    brokenImagesPage.open();
    brokenImagesPage.brokenImagesLabel.should("be.visible", { timeout: 10000 });
  });

  it("Check that Broken Images page content is displayed correctly", () => {
    brokenImagesPage.brokenImagesLabel.should("be.visible", { timeout: 10000 });
    brokenImagesPage.getImage(0).should("be.visible", { timeout: 10000 });
    brokenImagesPage.getImage(1).should("be.visible", { timeout: 10000 });
    brokenImagesPage.getImage(2).should("be.visible", { timeout: 10000 });
    brokenImagesPage.pageFooter.should("be.visible", { timeout: 10000 });
  });

  it("Check that the first and second images are broken", () => {
    brokenImagesPage.fetchImageStatus(brokenImagesPage.firstImage).should("eq", 404, { timeout: 10000 });
    brokenImagesPage.fetchImageStatus(brokenImagesPage.secondImage).should("eq", 404,{ timeout: 10000 });
  });

  it("Check that the third image uses the default blank avatar", () => {
    brokenImagesPage.fetchImageStatus(brokenImagesPage.thirdImage).should("eq", 200, { timeout: 10000 });
    brokenImagesPage.getImageSrc(brokenImagesPage.thirdImage).should("eq", "img/avatar-blank.jpg", { timeout: 10000 });
  });
});
