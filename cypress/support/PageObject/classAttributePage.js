export class ClassAttributePage{
    
    clickButtonAndCheckAlert(){
        const stub = cy.stub()
        cy.on('window:alert', stub)
        cy.get('.btn-primary').click().then( () => {
            expect(stub.getCall(0)).to.be.calledWith('Primary button pressed')
        })

        cy.get('.btn-primary').click()
        cy.on('window:alert', (alert) =>{
            expect(alert).to.equal('Primary button pressed')
        })
    }
}

export const onClassAttributePage = new ClassAttributePage()