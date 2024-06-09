describe('Radio Button', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Page2', () => {
    cy.page2()
    cy.url().should('eq', 'http://localhost:3000/#/page2');
  })

  it('Check Vertical Selected', () => {
    cy.vertical_selected()
    cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(1)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(3)').should('be.visible')
  })

  it('Check InLine Selected', () => {
    cy.inline_selected()
    cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(1)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(2)').should('be.visible')
  })

  it('Check Horizontal Selected', () => {
    cy.horizontal_selected()
    cy.get('.ant-radio-button-wrapper-checked > :nth-child(2)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(1)').should('be.visible')
    cy.get('.ant-radio-group > :nth-child(2)').should('be.visible')
  })
})

describe('Input', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Input Successfully', () => {
    cy.input_filled()
    cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value', 'Input Input Input');
  })

  it('Clear Input Successfully', () => {
    cy.clear_input()
    cy.get('.ant-input-affix-wrapper > .ant-input').should('have.value', '');
  })
})

describe('Select', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Select Successfully', () => {
    cy.select_filled()
    cy.get('.ant-select-selection-selected-value').should('have.text', 'Brazil');
  })

  it('Clear Select Successfully', () => {
    cy.clear_select()
    cy.get(':nth-child(3) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection').should('have.value', '');
  })
})

describe('TreeSelect', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Tree Select Successfully', () => {
    cy.tree_select_filled()
    cy.get('.ant-select-selection-selected-value').should('have.text', 'Green');
  })

  it('Clear Tree Select Successfully', () => {
    cy.clear_select_tree()
    cy.get(':nth-child(4) > .ant-col-14 > .ant-form-item-control > .ant-form-item-children > .ant-select > .ant-select-selection > .ant-select-selection__rendered > .ant-select-selection__placeholder').should('have.value', '');
  })
})

describe('Cascader', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Cascader Successfully', () => {
    cy.cascader_filled()
    cy.get('.ant-cascader-picker-label').should('have.text', 'São Paulo / Campinas');
  })

  it('Clear Cascader Successfully', () => {
    cy.clear_cascader()
    cy.get('.ant-cascader-picker > .ant-input').should('have.value', '');
  })
})

describe('Date Picker', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Date Picker Successfully', () => {
    cy.date_picker_filled()
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;
    cy.get('.ant-calendar-picker-input').should('have.value', formattedDate);
  })

  it('Clear Date Picker Successfully', () => {
    cy.clear_date_picker()
    cy.get('.ant-calendar-picker-input').should('have.value', '');
  })
})

describe('Slider with InputNumber', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Slider Successfully', () => {
    cy.slider_filled()
    cy.get('.ant-input-number-input').should('have.value', '5');
  })

  it('Clear Slider Successfully', () => {
    cy.clear_slider()
    cy.get('.ant-input-number-input').should('have.value', '');
  })
})

describe('Switch', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check Switch On Successfully', () => {
    cy.switch_on()
    cy.get('.ant-switch').should('have.class', 'ant-switch-checked');
  })

  it('Check Switch Off Successfully', () => {
    cy.switch_off()
    cy.get('.ant-switch').should('not.have.class', 'ant-switch-checked');
  })
})

describe('TextArea', () => {
  beforeEach(() => {
    cy.login()
  })

  it('Check TextArea Successfully', () => {
    cy.text_area_filled()
    cy.get('.ant-form-item-children > .ant-input').should('have.value', 'Thank You');
  })

  it('Clear TextArea Successfully', () => {
    cy.clear_text_area()
    cy.get('.ant-form-item-children > .ant-input').should('have.value', '');
  })
})