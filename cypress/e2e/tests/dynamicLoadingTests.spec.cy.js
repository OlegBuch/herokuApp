import { DynamicLoadingPage } from "../pageObjects/DynamicLoadingPage";

const dynamicLoadingPage = new DynamicLoadingPage();

describe("Validate Dynamic Loading component", () => {

  beforeEach(() => {
    dynamicLoadingPage.open();
  });

  it("Verify Dynamic Loading page content", () => {
    dynamicLoadingPage.verifyContent();
  });

  it("Verify Loading Bar Appearence", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.verifyLoadingBarAppearence();
  });

  it("Verify loading of hidden element", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.verifyTargetElementHidden();
    dynamicLoadingPage.load();
    dynamicLoadingPage.verifyTargetElementVisible();    
  });

  it("Verify loading of not attached element", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.notAttachedElementLoadingLink);
    dynamicLoadingPage.verifyTargetElementNotAttached();
    dynamicLoadingPage.load();
    dynamicLoadingPage.verifyTargetElementVisible();    
  });
});
