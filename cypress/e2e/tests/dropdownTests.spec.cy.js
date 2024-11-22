import { DropdownPage } from "../pageObjects/DropdownPage";

const dropdownPage = new DropdownPage();

describe("Validate Dropdown component", () => {

  beforeEach(() => {
    dropdownPage.open();
  });

  it("Verify Dropdown page content", () => {
    dropdownPage.verifyContent();
  });


  it("Verify available option list in dropdown", () => {
    dropdownPage.verifyAvailableOptionsList();
  });

  it("Verify default selected option in dropdown component", () => {
    dropdownPage.verifyOptionIsSelected(dropdownPage.dropdownOptions.defaultOption);
  });

  it("Verify that user can select available options in dropdown component", () => {
    dropdownPage.selectOption(dropdownPage.dropdownOptions.option1);
    dropdownPage.verifyOptionIsSelected(dropdownPage.dropdownOptions.option1);
    dropdownPage.selectOption(dropdownPage.dropdownOptions.oprion2);
    dropdownPage.verifyOptionIsSelected(dropdownPage.dropdownOptions.oprion2);
  });
});
