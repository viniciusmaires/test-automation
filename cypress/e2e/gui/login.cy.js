describe('Login', () => {
  
  it('Username Wrong', () => {
    cy.user_name_wrong()
    cy.get('.error-message').should('be.visible')
  })

  it('Password Wrong', () => {
    cy.password_wrong()
    cy.get('.error-message').should('be.visible')
  })

  it('Username Empty', () => {
    cy.username_empty()
    cy.get(':nth-child(2) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('be.visible')
  })

  it('Password Empty', () => {
    cy.password_empty()
    cy.get(':nth-child(3) > .ant-form-item-control-wrapper > .ant-form-item-control > .ant-form-explain').should('be.visible')
  })
 
  it('Login Successfully', () => {
    cy.login()
    cy.get('.ant-avatar').should('be.visible')
  })
})
