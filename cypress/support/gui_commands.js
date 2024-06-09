
//*****************************LOGIN*****************************

//Login with correct username and correct password
Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
      cy.visit("")
      cy.get('#normal_login_username').type(user)
      cy.get('#normal_login_password').type(password, { log: false })
      cy.get('.ant-btn').click()
    }
)

//Login with incorrect username and correct password
Cypress.Commands.add('user_name_wrong', (
  user = Cypress.env('user_name_wrong'),
  password = Cypress.env('user_password'),
) => {
    cy.visit("")
    cy.get('#normal_login_username').type(user)
    cy.get('#normal_login_password').type(password, { log: false })
    cy.get('.ant-btn').click()
  }
)

//Login with incorrect password and correct username
Cypress.Commands.add('password_wrong', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password_wrong'),
) => {
    cy.visit("")
    cy.get('#normal_login_username').type(user)
    cy.get('#normal_login_password').type(password, { log: false })
    cy.get('.ant-btn').click()
  }
)

//Login with blank username
Cypress.Commands.add('username_empty', (
  user = Cypress.env('user_name_empty'),
  password = Cypress.env('user_password'),
) => {
    cy.visit("")
    cy.get('#normal_login_username').type(user).clear()
    cy.get('#normal_login_password').type(password, { log: false })
    cy.get('.ant-btn').click()
  }
)

//Login with blank password
Cypress.Commands.add('password_empty', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password_empty'),
) => {
    cy.visit("")
    cy.get('#normal_login_username').type(user)
    cy.get('#normal_login_password').type(password, { log: false }).clear()
    cy.get('.ant-btn').click()
  }
)

//*****************************PAGE 1*****************************
Cypress.Commands.add('page1', ()=> {
  cy.get('[href="#/page1"] > span').click()
})

Cypress.Commands.add('pagination_next', ()=> {
  cy.get('[href="#/page1"] > span').click()
  cy.get('.ant-pagination-next > .ant-pagination-item-link').click()
})

Cypress.Commands.add('pagination_prev', ()=> {
  cy.get('[href="#/page1"] > span').click()
  cy.get('.ant-pagination-next > .ant-pagination-item-link').click()
  cy.get('.ant-pagination-prev > .ant-pagination-item-link').click()
})

Cypress.Commands.add('pagination_1', ()=> {
  cy.get('[href="#/page1"] > span').click()
  cy.get('.ant-pagination-item-2').click()
})

Cypress.Commands.add('pagination_2', ()=> {
  cy.get('[href="#/page1"] > span').click()
  cy.get('.ant-pagination-item-2').click()
  cy.get('.ant-pagination-item-1').click()
})


//*****************************PAGE 2*****************************
Cypress.Commands.add('page2', ()=> {
  cy.get('[href="#/page2"] > span').click()
})

//Radio Button
Cypress.Commands.add('vertical_selected', ()=> {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-radio-group > :nth-child(2)').click()
})

Cypress.Commands.add('inline_selected', ()=> {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-radio-group > :nth-child(3)').click()
})

Cypress.Commands.add('horizontal_selected', ()=> {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-radio-group > :nth-child(3)').click()
  cy.get('.ant-radio-group > :nth-child(1)').click()
})

//Input
Cypress.Commands.add('input_filled', (
  input_test = Cypress.env('input_test'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-input-affix-wrapper > .ant-input').type(input_test)
})

Cypress.Commands.add('clear_input', (
  input_test = Cypress.env('input_test'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-input-affix-wrapper > .ant-input').type(input_test)
  cy.get('.ant-input-suffix > .anticon > svg > path').click()
})

//Select
Cypress.Commands.add('select_filled', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
  cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
})

Cypress.Commands.add('clear_select', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
  cy.get('.ant-select-dropdown-menu > :nth-child(2)').click()
  cy.get('.ant-select-selection__clear > .anticon > svg > path').click()
})

//TreeSelect
Cypress.Commands.add('tree_select_filled', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
  cy.get('.ant-select-tree-switcher_close').click()
  cy.get(':nth-child(2) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()
})

Cypress.Commands.add('clear_select_tree', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').click();
  cy.get('.ant-select-tree-switcher_close').click()
  cy.get(':nth-child(2) > .ant-select-tree-node-content-wrapper > .ant-select-tree-title').click()
  cy.get('.ant-select-selection__clear > .anticon > svg > path').click()
})

//Cascader
Cypress.Commands.add('cascader_filled', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-cascader-picker > .ant-input').click();
  cy.get('.ant-cascader-menu-item').click()
  cy.get('[title="Campinas"]').click()
})

Cypress.Commands.add('clear_cascader', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-cascader-picker > .ant-input').click();
  cy.get('.ant-cascader-menu-item').click()
  cy.get('[title="Campinas"]').click()
  cy.get('.anticon-close-circle > svg > path').click()
})

//DatePicker
Cypress.Commands.add('date_picker_filled', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-calendar-picker-input').click();
  cy.get('.ant-calendar-today-btn').click()
})

Cypress.Commands.add('clear_date_picker', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-calendar-picker-input').click();
  cy.get('.ant-calendar-today-btn').click()
  cy.get('.ant-calendar-picker-input').click();
  cy.get('.ant-calendar-input').clear()
})

//Slider with InputNumber
Cypress.Commands.add('slider_filled', (
  slider_input_number = Cypress.env('slider_input_number'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-input-number-input').clear()
  cy.get('.ant-input-number-input').type(slider_input_number)
})

Cypress.Commands.add('clear_slider', (
  slider_input_number = Cypress.env('slider_input_number'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-input-number-input').clear()
  cy.get('.ant-input-number-input').type(slider_input_number)
  cy.get('.ant-input-number-input').clear()
})

//Switch
Cypress.Commands.add('switch_on', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-switch').click()
})

Cypress.Commands.add('switch_off', () => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-switch').click()
  cy.get('.ant-switch').click()
})

//TextArea
Cypress.Commands.add('text_area_filled', (
  text_area = Cypress.env('text_area'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-form-item-children > .ant-input').type(text_area)
})

Cypress.Commands.add('clear_text_area', (
  text_area = Cypress.env('text_area'),
) => {
  cy.get('[href="#/page2"] > span').click()
  cy.get('.ant-form-item-children > .ant-input').type(text_area)
  cy.get('.ant-form-item-children > .ant-input').clear()
})

//*****************************PAGE 3*****************************

Cypress.Commands.add('page3', ()=> {
  cy.get('[href="#/page3"] > span').click()
})

Cypress.Commands.add('go_to_home', ()=> {
  cy.get('[href="#/page3"] > span').click()
  cy.get(':nth-child(1) > .ant-breadcrumb-link > a').click()
})

Cypress.Commands.add('go_to_page1', ()=> {
  cy.get('[href="#/page3"] > span').click()
  cy.get(':nth-child(2) > .ant-breadcrumb-link > a').click()
})

Cypress.Commands.add('go_to_page2', ()=> {
  cy.get('[href="#/page3"] > span').click()
  cy.get(':nth-child(3) > .ant-breadcrumb-link > a').click()
})