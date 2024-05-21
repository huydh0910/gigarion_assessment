export class ClientDelayPage{

    clickButtonAndWaitResult(){
        cy.get('[id="ajaxButton"]').click()
        cy.get('[id="content"]',{ timeout: 15500 }).should('be.visible')
        cy.get('[id="content"]').then( content => {
            cy.wrap(content).should('be.visible')
            cy.wrap(content).find('p').should('contain','Data calculated on the client side.')
        })
    }
}

export const onClientDelayPage = new ClientDelayPage()