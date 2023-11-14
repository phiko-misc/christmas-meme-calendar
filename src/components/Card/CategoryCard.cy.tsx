import React from 'react'
import CategoryCard from './CategoryCard'
import ChevronLeftIcon from '@components/Icons/ChevronLeftIcon'

describe('<CategoryCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CategoryCard text='Test' icon={<ChevronLeftIcon className="text-black h-7 w-7" />}/>)
    cy.get('.text-lg').should('have.text', 'Test')
  })
})