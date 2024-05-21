export class SampleAppPage{
    loginSuccessfull(name, pwd){
        cy.get('[name="UserName"]').type(name)
        cy.get('[name="Password"]').type(pwd)
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','Welcome, '+name+'!')
        cy.get('[id="login"]').should('contain','Log Out')
    }
    logout(){
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','User logged out.')
        cy.get('[id="login"]').should('contain','Log In')
    }

    loginFailed(pass){
        cy.get('[name="UserName"]').type('usernames')
        cy.get('[name="Password"]').type(pass)
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','Invalid username/password')
        cy.get('[id="login"]').should('contain','Log In')
    }

    loginFailedWithoutUsername(pass){
        cy.get('[name="UserName"]')
        cy.get('[name="Password"]').type(pass)
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','Invalid username/password')
        cy.get('[id="login"]').should('contain','Log In')
    }
}

export const onSampleAppPage = new SampleAppPage()