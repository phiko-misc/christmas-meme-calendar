import React from 'react'
import ThemeSwitch from './ThemeButton'

describe('<ThemeSwitch />', () => {
  it('renders', () => {
    cy.mount(<ThemeSwitch />)
    cy.get('[data-cy-switchtheme="true"]').click()
  })
})