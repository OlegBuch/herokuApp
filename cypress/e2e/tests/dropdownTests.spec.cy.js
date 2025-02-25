import { DropdownPageObject } from "../pageObjects/DropdownPageObject";

const dropdownPage = new DropdownPageObject();

describe("Check that Dropdown component works", () => {

  beforeEach(() => {
    dropdownPage.open();
  });

  it("Check Dropdown page content", () => {
    dropdownPage.checkContent();
  });


  it("Check that options are visible when we click on the dropdown", () => {
    dropdownPage.checkAvailableOptionsList();
  });

  it("Check that default option works at Dropdown page", () => {
    dropdownPage.checkOptionIsSelected(dropdownPage.dropdownOptions.defaultOption);
  });

  it("Check that all options can be selected at Dropdown component", () => {
    dropdownPage.selectOption(dropdownPage.dropdownOptions.option1);
    dropdownPage.checkOptionIsSelected(dropdownPage.dropdownOptions.option1);
    dropdownPage.selectOption(dropdownPage.dropdownOptions.option2);
    dropdownPage.checkOptionIsSelected(dropdownPage.dropdownOptions.option2);
  });
});
