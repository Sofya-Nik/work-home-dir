/// <reference types="cypress" />

context('SauceDemo', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
    })
  
    it('can login', () => {
      cy.get('input[name="user-name"]')
          .type('standard_user').should('have.value', 'standard_user')
  
      cy.get('input[name="password"]')
          .type('secret_sauce1').should('have.value', 'secret_sauce1')
  
      cy.get('input[type="submit"]')
          .click()
  
      cy.get('h3[data-test="error"]').should('contain', 'Username and password do not match any user in this service')
  
      // cy.get('body').should('contain', 'Products')
    })
  })
  