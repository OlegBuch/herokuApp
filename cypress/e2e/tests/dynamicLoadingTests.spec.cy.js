import { DynamicLoadingPageObject } from "../pageObjects/DynamicLoadingPageObject";

const dynamicLoadingPage = new DynamicLoadingPageObject();

describe("Check that Dynamic Loading component works", () => {

  beforeEach(() => {
    dynamicLoadingPage.open();
  });

  it("Check that Dynamic Loading page content works", () => {
    dynamicLoadingPage.checkContent();
  });

  it("Check that Loading Bar UI looks correct", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.checkLoadingBarAppearance();
  });

  it("Check that loading of hidden element works", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.checkTargetElementHidden();
    dynamicLoadingPage.load();
    dynamicLoadingPage.checkTargetElementVisible();
  });

  it("Check that loading of not attached element works", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.notAttachedElementLoadingLink);
    dynamicLoadingPage.checkTargetElementNotAttached();
    dynamicLoadingPage.load();
    dynamicLoadingPage.checkTargetElementVisible();
  });
});
