import { DynamicLoadingPageObject } from "../pageObjects/DynamicLoadingPageObject";

const dynamicLoadingPage = new DynamicLoadingPageObject();

describe("Check that Dynamic Loading component works", () => {

  beforeEach(() => {
    dynamicLoadingPage.open();
    dynamicLoadingPage.dynamicLoadingLabel.should("be.visible", { timeout: 10000 });
  });

  it("Check that Dynamic Loading page content works", () => {
    dynamicLoadingPage.dynamicLoadingLabel.should("be.visible", { timeout: 10000 });
    dynamicLoadingPage.hiddenElementLoadingLink.should("be.visible", { timeout: 10000 });
    dynamicLoadingPage.notAttachedElementLoadingLink.should("be.visible", { timeout: 10000 });
    dynamicLoadingPage.pageFooter.should("be.visible",  { timeout: 10000 });
  });

  it("Check that Loading Bar UI looks correct", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.startButton.should("be.visible", { timeout: 10000 });

    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.getLoadingBar().should("be.visible", { timeout: 10000 }).and("contain.text", "Loading...");
    dynamicLoadingPage.getLoadingBarImage().should("have.attr", "src", "/img/ajax-loader.gif", { timeout: 10000 });
  });

  it("Check that loading of hidden element works", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.hiddenElementLoadingLink);
    dynamicLoadingPage.getTargetElement().should("exist").and("not.be.visible", { timeout: 10000 });

    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.getTargetElement().should("be.visible", { timeout: 10000 });
  });

  it("Check that loading of not attached element works", () => {
    dynamicLoadingPage.openLink(dynamicLoadingPage.notAttachedElementLoadingLink);
    dynamicLoadingPage.getTargetElement().should("not.exist", { timeout: 10000 });

    dynamicLoadingPage.clickStartButton();
    dynamicLoadingPage.getTargetElement().should("be.visible", { timeout: 10000 });
  });
});
