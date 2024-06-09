describe('Page1', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Page1', () => {
    cy.page1()
    cy.url().should('eq', 'http://localhost:3000/#/page1');
    cy.get('[data-row-key="1"] > .ant-table-column-has-actions').first().should('contain', 'John Brown');
  })

  it('Check Pagination Next', () => {
    cy.pagination_next()
    cy.get('.ant-table-row > .ant-table-column-has-actions').first().should('contain', 'Milla Laine');
  })

  it('Check Pagination Prev', () => {
    cy.pagination_prev()
    cy.get('[data-row-key="1"] > .ant-table-column-has-actions').first().should('contain', 'John Brown');
  })

  it('Check Pagination 1', () => {
    cy.pagination_next()
    cy.get('.ant-table-row > .ant-table-column-has-actions').first().should('contain', 'Milla Laine');
  })

  it('Check Pagination 2', () => {
    cy.pagination_prev()
    cy.get('[data-row-key="1"] > .ant-table-column-has-actions').first().should('contain', 'John Brown');
  })
})