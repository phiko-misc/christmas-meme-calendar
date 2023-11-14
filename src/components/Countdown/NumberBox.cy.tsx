import React from 'react'
import NumberBox from './NumberBox'

describe('<NumberBox />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NumberBox num={1} unit='sec'/>)
    cy.get('[data-cy-numberbox="sec"').should('have.text', '1sec')
  })
})