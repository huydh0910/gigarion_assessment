/// <reference types="cypress" />
describe('test suite',() => {

    it('Class Attribute test',  () => {
        cy.visit('/ClassAttr')
        //TC1: Verify user can access to Class Attribute page successfully 
        cy.get('section div h3').should('contain','Class Attribute')

        //TC2: Verify user click on the primary button, popup is displayed
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('.btn-primary').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Primary button pressed')
        })

        cy.get('.btn-primary').click()
        cy.on('window:alert', (alert) =>{
            expect(alert).to.equal('Primary button pressed')
        })
        

    })
})
