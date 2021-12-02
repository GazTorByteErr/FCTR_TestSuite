/// <reference types="cypress" />

describe('Factorial home page', () => {
  beforeEach(() => {
    cy.visit('https://qa-test.emcd.io/')
  })

  it('displays appropriate header', () => {
    cy.get('h1').should('have.text', 'The greatest factorial calculator!')
  })

  it('displays input field with appropriate placeholder', () => {
    cy.get('input[id=number]').should('have.attr', 'placeholder', 'Enter an integer')
  })

  it('displays submit button to calculate', () => {
    cy.get('button[id=getFactorial]').should('have.text','Calculate!')
  })

  it('contain a link to Terms and Conditions with appropriate text', () => {
    cy.get('a[href="/terms"]').should('have.text', 'Terms and Conditions')
  })
  
  it('contain a link to Privacy with appropriate text', () => {
    cy.get('a[href="/privacy"]').should('have.text', 'Privacy')
  })
})
