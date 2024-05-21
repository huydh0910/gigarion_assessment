/// <reference types="cypress" />
describe('test suite',() => {

    it('Verify Text test',  () => {
        cy.visit('/VerifyText')
        //TC1: Verify user can access to Verify Text page successfully 
        cy.get('section div h3').should('contain','Verify Text')

        //TC2: Verify the text 'Welcome UserName!' can be found in highlight area
        const exspectedstring = 'Welcome UserName!'
        cy.get('.bg-primary').should('contain',exspectedstring)
        
        //TC3: Verify the text 'Hello UserName!' can be found in highlight area
        const exspectedstring2 = 'Hello UserName!'
        cy.get('.bg-warning .badge-secondary').should('contain',exspectedstring2);
    
    
    })
})
