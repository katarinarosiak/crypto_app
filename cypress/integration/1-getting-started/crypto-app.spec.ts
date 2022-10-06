describe('Dashboard page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays the page titile', () => {
    cy.get('#page-title').should('have.text', 'Dashboard')
  })

  it('displays data in the table', () => {
      cy.get('[data-tested="BCH/AED-0"]').should('have.text', 'BCH/AED')
  })

  it('choosing a fiat currency from the dropdown filters the data in the table to only display data for this fiat', () => {

      cy.get('[data-tested="dropdown-btn"]').click()
      cy.get('[data-tested="dropAFN2"]').click()
      cy.get('[data-tested="BCH/AED-0"]').should('not.exist')
  })

  it ('displays the titile for the pairing', () => {
    cy.visit('http://localhost:3000/BCHAED')
    cy.contains('Pairing: BCH-AED').should('exist')
  })

  it ('toggle button switches between percent and price', () => {
    cy.visit('http://localhost:3000/BCHAED')
    cy.get('[data-tested="toggle-switch0"]').click()
    cy.get('[data-tested="toggle-switch1"]').click()
    cy.get('[data-tested="toggle-switch2"]').click()
    cy.contains('%').should('not.exist')
  })
})
