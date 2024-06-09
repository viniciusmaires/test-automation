describe('Page3', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Page3', () => {
    cy.page3()
    cy.url().should('eq', 'http://localhost:3000/#/page3');
  })

  it('Check Page Home', () => {
    cy.go_to_home()
    cy.url().should('eq', 'http://localhost:3000/#/');
  })

  it('Check Page 1', () => {
    cy.go_to_page1()
    cy.url().should('eq', 'http://localhost:3000/#/page1');
  })

  it('Check Page 2', () => {
    cy.go_to_page2()
    cy.url().should('eq', 'http://localhost:3000/#/page2');
  })
})