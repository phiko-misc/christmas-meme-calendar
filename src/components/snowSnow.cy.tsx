import React from 'react'
import Snow from './snow'

describe('<Snow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Snow />)
    cy.get('[data-testid="SnowfallCanvas"]')
  })
})