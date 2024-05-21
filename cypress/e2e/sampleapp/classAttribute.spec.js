/// <reference types="cypress" />

import { onClassAttributePage } from "../../support/PageObject/classAttributePage"
import { navigateTo } from "../../support/PageObject/navigationPage"

describe('test suite',() => {

    it('Class Attribute test',  () => {
        //TC1: Verify user can access to Class Attribute page successfully 
        navigateTo.classAttributePage()
       
        //TC2: Verify user click on the primary button, popup is displayed
        onClassAttributePage.clickButtonAndCheckAlert()
    })
})
