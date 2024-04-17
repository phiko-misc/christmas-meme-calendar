import React from 'react'
import Countdown from './CountDown'

describe('<Countdown />', () => {
  it('Renders and check', () => {
    cy.mount(<Countdown />)
    cy.get('[data-cy-numberbox="Seconds"] > .mt-3').should('have.text', 'Seconds')
    cy.get('[data-cy-numberbox="Minutes"] > .mt-3').should('have.text', 'Minutes')
    cy.get('[data-cy-numberbox="Hours"] > .mt-3').should('have.text', 'Hours')
    cy.get('[data-cy-numberbox="Days"] > .mt-3').should('have.text', 'Days')
    cy.wait(1000)
    cy.get('[data-cy-numberbox="Seconds"] > .relative > .font-mono').as('txtPrev', { type: 'static' })
    cy.wait(1000)
    cy.get('@txtPrev').then($txtPrev => {
      const txtPrev = $txtPrev.text()

      cy.get('[data-cy-numberbox="Seconds"] > .relative > .font-mono').should($txt => {
        expect($txt.text()).not.to.eq(txtPrev)
      })
    })
  })
})