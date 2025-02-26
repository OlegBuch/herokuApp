import { DropdownPageObject } from "../pageObjects/DropdownPageObject";

const dropdownPage = new DropdownPageObject();

describe("Check that Dropdown component works", () => {

  beforeEach(() => {
    dropdownPage.open();
  });

  it("Check Dropdown page content", () => {
    cy.contains("h3", "Dropdown List").should("be.visible", { timeout: 10000 });
    dropdownPage.dropdown.should("be.visible");
    cy.contains("#page-footer", "Powered by Elemental Selenium").should("be.visible", { timeout: 10000 });
  });

  it("Check that options are visible when we click on the dropdown", () => {
    dropdownPage.getDropdownOptions().should("have.length", Object.keys(dropdownPage.dropdownOptions).length);

    Object.values(dropdownPage.dropdownOptions).forEach((option) => {
      dropdownPage.dropdown.should("contain", option, { timeout: 10000 });
    });
  });

  it("Check that default option is selected by default", () => {
    dropdownPage.getSelectedOption().should("eq", dropdownPage.dropdownOptions.defaultOption,{ timeout: 10000 });
  });

  it("Check that all options can be selected at Dropdown component", () => {
    dropdownPage.selectOption(dropdownPage.dropdownOptions.option1);
    dropdownPage.getSelectedOption().should("eq", dropdownPage.dropdownOptions.option1, { timeout: 10000 });

    dropdownPage.selectOption(dropdownPage.dropdownOptions.option2, { timeout: 10000 });
    dropdownPage.getSelectedOption().should("eq", dropdownPage.dropdownOptions.option2, { timeout: 10000 });
  });
});
