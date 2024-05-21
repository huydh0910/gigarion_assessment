/// <reference types="cypress" />

import { navigateTo } from "../../support/PageObject/navigationPage"
import { onVerifyTextPage } from "../../support/PageObject/verifyTextPage"

describe('test suite',() => {

    it('Verify Text test',  () => {
        //TC1: Verify user can access to Verify Text page successfully 
        navigateTo.verifyTextPage()

        //TC2: Verify the text 'Welcome UserName!' can be found in highlight area
        onVerifyTextPage.checkthePrimaryText('Welcome UserName!')

        //TC3: Verify the text 'Hello UserName!' can be found in highlight area
        onVerifyTextPage.checktheSecondaryText('Hello UserName!')

    })
})
