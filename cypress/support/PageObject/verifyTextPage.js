export class VerifyTextpage{

    checkthePrimaryText(exspectedstring){
        cy.get('.bg-primary').should('contain',exspectedstring)
    }

    checktheSecondaryText(exspectedstring){
        cy.get('.bg-warning .badge-secondary').should('contain',exspectedstring);
    }
}

export const onVerifyTextPage = new VerifyTextpage()