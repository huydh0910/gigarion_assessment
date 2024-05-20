/// <reference types="cypress" />

describe('test suite',() => {

    it('client side delay test',  () => {
        cy.visit('/clientdelay')
        //TC1: Verify user can access to Client Side Delay successfully 
        cy.get('section div h3').should('contain','Client Side Delay')

        //TC2: 

        cy.get('[id="ajaxButton"]').click()
        cy.get('[id="content"]',{ timeout: 15500 }).should('be.visible')
        cy.get('[id="content"]').then( content => {
            cy.wrap(content).should('be.visible')
            cy.wrap(content).find('p').should('contain','Data calculated on the client side.')
        })
    })
})