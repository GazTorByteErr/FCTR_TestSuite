/// <reference types="cypress" />
function factorial(n) {
  return Math.floor(n ? n * factorial(n - 1) : 1);
}

function extractResult(text) {
  return Math.floor(text.match(/(?<=: ).+/g));
}

describe('Factorial', () => {
  beforeEach(() => {
    cy.visit('https://qa-test.emcd.io/')
  })

  it('can calculate 0!', () => {
    cy.get('input[id=number]').type('0')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 0 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', factorial(0))
  })

  it('can calculate 9!', () => {
    cy.get('input[id=number]').type('9')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 9 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', factorial(9))
  })

  it('can calculate 19!', () => {
    cy.get('input[id=number]').type('19')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 19 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', factorial(19))
  })

  it('can calculate 22!', () => {
    cy.get('input[id=number]').type('22')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 22 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', factorial(22))
  })

  it('can calculate 99!', () => {
    cy.get('input[id=number]').type('99')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 99 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', 9.332621544394415e+155)
  })

  it('can calculate 100!', () => {
    cy.get('input[id=number]').type('100')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 100 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', 9.332621544394415e+157)
  })

  it('can calculate 170!', () => {
    cy.get('input[id=number]').type('170')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 170 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', 7.257415615307999e+306)
  })

  it('can calculate 171!', () => {
    cy.get('input[id=number]').type('171')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 171 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq',  1.24101807e+309)
  })

  it('can calculate 969!', () => {
    cy.get('input[id=number]').type('969')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 969 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', 6.436891217e+2474)
  })

  it('can calculate 999!', () => {
    cy.get('input[id=number]').type('999')
    cy.get('#getFactorial').click()
    cy.contains('The factorial of 999 is:')
    cy.get('#resultDiv').invoke('text').then(extractResult).should('eq', 4.0238726e+2564)
  })

  it('return appropriate validation message on attempt to submit string value', () => {
    cy.get('input[id=number]').type('noninteger')
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('return appropriate validation message on attempt to submit negative value', () => {
    cy.get('input[id=number]').type('-1')
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('return appropriate validation message on attempt to submit decimal', () => {
    cy.get('input[id=number]').type('1.1')
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('return appropriate validation message on attempt to submit empty form', () => {
    cy.get('#getFactorial').click()
    cy.contains('Please enter an integer')
  })

  it('can be submitted by Enter key', () => {
    cy.get('input[id=number]').type('10{enter}')
    cy.contains('The factorial of 10 is:')
  })
})
