/// <reference types="cypress" />

import { navigateTo } from "../../support/PageObject/navigationPage"
import { onSampleAppPage } from "../../support/PageObject/sampleAppPage"

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
        //TC1: Verify user can access to Sample App successfully 
        navigateTo.sampleAppPage()

        //TC2: Verify user can login with valid username and valid(pwd) password
        onSampleAppPage.loginSuccessfull('Huy','pwd')
        //TC3: Verify after logged in, user can logout successfully
        onSampleAppPage.logout()
        //TC4: Verify user can login with special symbol username and valid(pwd) password
        //TC6: Verify user can login with invalid username(space value) and valid(pwd) password
        const usernames = ['!@#$',' ','Huy']
        cy.wrap(usernames).each(username => {
            onSampleAppPage.loginSuccessfull(username,'pwd')
            onSampleAppPage.logout()
        })

        //TC5: Verify user cannot login with invalid username(blank value) and valid(pwd) password
        onSampleAppPage.loginFailedWithoutUsername('pwd')    
        
        //TC7: Verify user cannot login with valid username and invalid password
        //TC8: Verify user cannot login with invalid username(space value) and invalid(not pwd) password
        const passwords = [' ', 'password']
        cy.wrap(passwords).each( password => {
            onSampleAppPage.loginFailed(password)
        })
    })
})