import { BrokenImagesPage } from "../pageObjects/BrokenImagesPage";

const brokenImagesPage = new BrokenImagesPage();

describe("Validate Broken Images component", () => {

  beforeEach(() => {
    brokenImagesPage.open();
  });

  it("Verify Broken Images page content", () => {
    brokenImagesPage.verifyContent();
  });

  it("Verify that first and second images are broken", () => {
    brokenImagesPage.verifyThatImageIsBroken(brokenImagesPage.firstImage);
    brokenImagesPage.verifyThatImageIsBroken(brokenImagesPage.secondImage);
  });

  it("Verify that third image uses default blank avatar", () => {
    brokenImagesPage.verifyThatImageIsNotBroken(brokenImagesPage.thirdImage);
    brokenImagesPage.verifyThatImageIsBlank(brokenImagesPage.thirdImage);
  });
});
