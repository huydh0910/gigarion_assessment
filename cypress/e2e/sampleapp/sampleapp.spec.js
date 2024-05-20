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
    it('login test',  () => {
        cy.visit('/sampleapp')
        //TC1: Verify user can access to Sample App successfully 
        cy.get('section div h3').should('contain','Sample App')

        //TC2: Verify user can login with valid username and valid(pwd) password
        cy.get('[name="UserName"]').type('Huy')
        cy.get('[name="Password"]').type('pwd')
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','Welcome, Huy!')
        cy.get('[id="login"]').should('contain','Log Out')
        //TC3: Verify after logged in, user can logout successfully
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','User logged out.')
        cy.get('[id="login"]').should('contain','Log In')
        //TC4: Verify user can login with special symbol username and valid(pwd) password
        //TC6: Verify user can login with invalid username(space value) and valid(pwd) password
        const usernames = ['!@#$',' ','Huy']
        cy.wrap(usernames).each(username => {
            cy.get('[name="UserName"]').type(username)
            cy.get('[name="Password"]').type('pwd')
            cy.get('[id="login"]').click()
            cy.get('[id="loginstatus"]').should('contain',`Welcome, ${username}`)
            cy.get('[id="login"]').should('contain','Log Out')
            cy.get('[id="login"]').click()
        })

        //TC5: Verify user cannot login with invalid username(blank value) and valid(pwd) password
        cy.get('[name="UserName"]')
        cy.get('[name="Password"]').type('pwd')
        cy.get('[id="login"]').click()
        cy.get('[id="loginstatus"]').should('contain','Invalid username/password')
        cy.get('[id="login"]').should('contain','Log In')

        
        //TC7: Verify user cannot login with valid username and invalid password
        //TC8: Verify user cannot login with invalid username(space value) and invalid(not pwd) password
        const passwords = [' ', 'password']
        cy.wrap(passwords).each( password => {
            cy.get('[name="UserName"]').type('usernames')
            cy.get('[name="Password"]').type(password)
            cy.get('[id="login"]').click()
            cy.get('[id="loginstatus"]').should('contain','Invalid username/password')
            cy.get('[id="login"]').should('contain','Log In')
        })
    })
})