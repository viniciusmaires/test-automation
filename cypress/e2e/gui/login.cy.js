describe('Login', () => {
  
  it('Login Wrong', () => {
    cy.login_wrong()
    cy.get('.jq-toast-text-container').should('be.visible')
  })

  it('Password Wrong', () => {
    cy.password_wrong()
    cy.get('.jq-toast-text-container').should('be.visible')
  })

  it('Login and Password Empty', () => {
    cy.login_password_empty()
    cy.get('#email-header-error').should('be.visible')
  })

  it('Login Successfully', () => {
    cy.login()
    cy.get('.action > .logged-in').should('be.visible')
  })
})
