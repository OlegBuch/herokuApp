import { paths } from "../appConstants";

export class DropdownPageObject {
  dropdownOptions = {
    defaultOption: "Please select an option",
    option1: "Option 1",
    option2: "Option 2",
  };

  // Elements
  get dropdown() {
    return cy.get("#dropdown");
  }

  getDropdownOptions() {
    return this.dropdown.find("option");
  }

  open() {
    cy.visit(paths.dropdown, { timeout: 10000 });
  }

  selectOption(option) {
    this.dropdown.select(option);
  }

  getSelectedOption() {
    return this.dropdown.find("option:selected").invoke("text");
  }
}
