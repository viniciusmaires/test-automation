
//*****************************LOGIN*****************************

//Login com sucesso
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.visit("")
  
      cy.wait(5000)
      cy.get('.dropdown-login > .dropdown-wrapper > [type="button"] > span').click()
      cy.get('#email-header').type(user, {force: true})
      cy.get('#password-header').type(password, { log: false }, {force: true})
      cy.get('#header-send2').click()
    }
    login()
})

//Username incorreto
Cypress.Commands.add('user_name_wrong', (
  user = Cypress.env('user_name_wrong'),
  password = Cypress.env('user_password'),
) => {
  const user_name_wrong = () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("")

    cy.wait(5000)
    cy.get('.dropdown-login > .dropdown-wrapper > [type="button"] > span').click()
    cy.get('#email-header').type(user, {force: true})
    cy.get('#password-header').type(password, { log: false }, {force: true})
    cy.get('#header-send2').click()
  }
  user_name_wrong()
})

//Password incorreto
Cypress.Commands.add('password_wrong', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password_wrong'),
) => {
  const password_wrong = () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("")

    cy.wait(5000)
    cy.get('.dropdown-login > .dropdown-wrapper > [type="button"] > span').click()
    cy.get('#email-header').type(user, {force: true})
    cy.get('#password-header').type(password, { log: false }, {force: true})
    cy.get('#header-send2').click()
  }
  password_wrong()
})

//Username e Password vazios
Cypress.Commands.add('login_password_empty', (
  user = Cypress.env('user_name_empty'),
  password = Cypress.env('user_password_empty'),
) => {
  const login_password_empty = () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit("")

    cy.wait(5000)
    cy.get('.dropdown-login > .dropdown-wrapper > [type="button"] > span').click()
    cy.get('#email-header').type(user, {force: true})
    cy.get('#password-header').type(password, { log: false }, {force: true})
    cy.get('#header-send2').click()
  }
  login_password_empty()
})



//*****************************CHECKOUT*****************************

/*
Checkout com boleto.
Consultar Produto Exemplo: SKU 125231
*/
Cypress.Commands.add('gui_boletoCheckout', (
    name1 = Cypress.env('name1'),
    cep = Cypress.env('cep'),
  )=> {
    const boletoCheckout = () => {
      cy.get('#search').click()
      cy.get('#search').type(name1)
      cy.get('button[title="Procurar"]').click()
      cy.get('#event_125231 > .row > :nth-child(2) > .action').click()
      cy.get('.minicart-wrapper > .action').click()
      cy.wait(5000)
      cy.get('.link-cart').click()
      cy.get('#cart-shipping').type(cep, {force: true})
      cy.get('#cart-shipping-btn').click()
      cy.get('#proceedToCheckoutBtnCart').click()
      cy.wait(6000)
      cy.get('.shipping-address-nav > .primary').click()
      cy.get(':nth-child(1) > .payment-method-title > .label > .title').click()
      cy.wait(8000)
      cy.get('.finish-order > .action').click()
      cy.wait(6000)
    }
    boletoCheckout()

})

/*
Checkout com boleto parcelado.
Consultar Produto Exemplo: Máscara Descartável Tripla com Clipe Nasal Branca - Sp Protection
*/
Cypress.Commands.add('gui_boletoParceladoCheckout', (
  name2 = Cypress.env('name2'),
  cep = Cypress.env('cep'),
)=> {
  const boletoParceladoCheckout = () => {
    cy.get('#search').click()
    cy.get('#search').type(name2)
    cy.get('button[title="Procurar"]').click()
    cy.get('#event_125231 > .row > :nth-child(2) > .action').click()
    cy.get('.minicart-wrapper > .action').click()
    cy.get('.link-cart').click()
    cy.get('#cart-shipping').type(cep, {force: true})
    cy.get('#cart-shipping-btn').click()
    cy.get('#proceedToCheckoutBtnCart').click()
    cy.wait(6000)
    cy.get('.shipping-address-nav > .primary').click()
    cy.wait(6000)
    cy.get(':nth-child(2) > .payment-method-title > .label > .title').click()
    cy.wait(8000)
    cy.get('div.select > #henryscheinbrazil_billet_installments').select(1)
    cy.get('.finish-order > .action').click()
    cy.wait(6000)
  }
  boletoParceladoCheckout()

})

/*
Checkout com cartão de crédito.
Consultar Produto Exemplo: SKU 125231
*/
Cypress.Commands.add('gui_cartaoCreditoCheckout', (
  name1 = Cypress.env('name1'),
  cep = Cypress.env('cep'),
  cc_number = Cypress.env('cc_number'),
  cc_owner = Cypress.env('cc_owner'),
  cc_exp_date = Cypress.env('cc_exp_date'),
  cc_cid = Cypress.env('cc_cid')
)=> {
  const cartaoCreditoCheckout = () => {
    cy.get('#search').click()
    cy.get('#search').type(name1)
    cy.get('button[title="Procurar"]').click()
    cy.get('#event_125231 > .row > :nth-child(2) > .action').click()
    cy.get('.minicart-wrapper > .action').click()
    cy.get('.link-cart').click()
    cy.get('#cart-shipping').type(cep, {force: true})
    cy.get('#cart-shipping-btn').click()
    cy.get('#proceedToCheckoutBtnCart').click()
    cy.wait(6000)
    cy.get('.shipping-address-nav > .primary').click()
    cy.get(':nth-child(3) > .payment-method-title > .label > .title').click()
    cy.wait(8000)
    cy.get('#henryscheinbrazil_creditcard_cc_number').type(cc_number)
    cy.get('#henryscheinbrazil_creditcard_cc_owner').type(cc_owner)
    cy.get('#henryscheinbrazil_creditcard_cc_exp_date').type(cc_exp_date)
    cy.get('#henryscheinbrazil_creditcard_cc_cid').type(cc_cid)
    cy.get('div.select > #henryscheinbrazil_creditcard_installments').select(1)
    cy.get('.finish-order > .action').click()
  }
  cartaoCreditoCheckout()

})