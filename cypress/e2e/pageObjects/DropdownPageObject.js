import { paths } from "../appConstants";

export class DropdownPageObject {
  dropdownOptions = {
    defaultOption: "Please select an option",
    option1: "Option 1",
    option2: "Option 2",
  };

  // Elements
  get dropdownHeader() {
    return cy.contains("h3", "Dropdown List");
  }
  get dropdown() {
    return cy.get("#dropdown");
  }
  get pageFooter() {
    return cy.contains("#page-footer", "Powered by Elemental Selenium");
  }

  // Open dropdown page and check that elements are visible
  open() {
    cy.visit(paths.dropdown, { timeout: 10000 });
    this.dropdownHeader.should("be.visible");
  }

  // Check that all required elements are present
  checkContent() {
    this.dropdownHeader.should("be.visible");
    this.dropdown.should("be.visible");
    this.pageFooter.should("be.visible");
  }

  // Check that dropdown contains correct number of options and expected values
  checkAvailableOptionsList() {
    this.dropdown.should("be.visible").find("option").should("have.length", Object.keys(this.dropdownOptions).length);

    Object.values(this.dropdownOptions).forEach((option) => {
      this.dropdown.should("contain", option);
    });
  }

  // Select a dropdown option
  selectOption(option) {
    this.dropdown.should("be.visible").select(option);
  }

  // Check that the selected option is correct
  checkOptionIsSelected(option) {
    this.dropdown.find("option:selected").should("have.text", option);
  }
}
