export class NavigationPage{
    classAttributePage(){
        cy.visit('/ClassAttr')
        cy.get('section div h3').should('contain','Class Attribute')
    }

    clientSideDelayPage(){
        cy.visit('/clientdelay')
        cy.get('section div h3').should('contain','Client Side Delay')

    }

    sampleAppPage(){
        cy.visit('/sampleapp')
        cy.get('section div h3').should('contain','Sample App')

    }

    verifyTextPage(){
        cy.visit('/VerifyText')
        cy.get('section div h3').should('contain','Verify Text')

    }

}

export const navigateTo = new NavigationPage()