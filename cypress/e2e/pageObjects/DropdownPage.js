import { pathes } from "../appConstants";

export class DropdownPage {
  dropdownOptions = {
    defaultOption: 'Please select an option',
    option1: 'Option 1',
    oprion2: 'Option 2',
  }
  //elements
  get dropdownLabel() { return cy.contains('h3', 'Dropdown List'); }  
  get dropdown() { return cy.get('#dropdown'); } 
  get pageFooter() { return cy.contains('#page-footer', "Powered by Elemental Selenium"); }  

  open() {
    cy.visit(pathes.dropdown)
    this.dropdownLabel.should('be.visible');
  }
  verifyContent() {
    this.dropdownLabel.should('be.visible');
    this.dropdown.should('be.visible');
    this.pageFooter.should('be.visible');
  }

  verifyAvailableOptionsList() {
    this.dropdown.find('option').should('have.length', Object.keys(this.dropdownOptions).length);
    Object.values(this.dropdownOptions).forEach(option => {
      this.dropdown.find('option').contains(option).should('exist');
    });
  }

  selectOption(option) {
    this.dropdown.select(option);    
  }

  verifyOptionIsSelected(option) {
    this.dropdown.find('option:selected').should('have.text', option);
  }
}
