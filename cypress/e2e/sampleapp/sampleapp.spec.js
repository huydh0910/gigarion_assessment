/// <reference types="cypress" />

describe('test suite',() => {
    describe('suite section', () => {
        
        beforeEach('login', () => {
            //repeat for every test
        })
        it('before test',  () => {
            // put the code of the test
        })
    })
    it('first test',  () => {
        cy.visit('/sampleapp')
        cy.get('section div h3').should('contain','Sample App')
    })
})