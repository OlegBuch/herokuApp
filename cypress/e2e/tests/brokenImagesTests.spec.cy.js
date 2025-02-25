import { BrokenImagesPageObject } from "../pageObjects/BrokenImagesPageObject";

const brokenImagesPage = new BrokenImagesPageObject();


describe("Check that Broken Images component works", () => {

  beforeEach(() => {
    brokenImagesPage.open();
  });

  it("Check that Broken Images page content is displayed correctly", () => {
    brokenImagesPage.checkContent();
  });

  it("Check that the first and second images are broken", () => {
    brokenImagesPage.checkThatImageIsBroken(brokenImagesPage.firstImage);
    brokenImagesPage.checkThatImageIsBroken(brokenImagesPage.secondImage);
  });

  it("Check that the third image uses the default blank avatar", () => {
    brokenImagesPage.checkThatImageIsNotBroken(brokenImagesPage.thirdImage);
    brokenImagesPage.checkThatImageIsBlank(brokenImagesPage.thirdImage);
  });
});
