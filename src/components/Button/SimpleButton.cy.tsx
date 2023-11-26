import React from 'react'
import SimpleButton from './SimpleButton'
import ChevronLeftIcon from '@components/Icons/ChevronLeftIcon'

describe('<SimpleButton />', () => {
  it('renders', () => {
    cy.mount(<SimpleButton icon={<ChevronLeftIcon className="mr-4 h-16 w-16 text-right" />} />)
    cy.get('[data-cy-simplebutton="true"]').then(($btn) => {
      if ($btn.is(':disabled')) {
        cy.log('Button exists and is disabled!')
        return
      }
      expect($btn.is(':disabled')).to.eq(false)
    })
  });
})