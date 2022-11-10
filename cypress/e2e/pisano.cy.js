/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import { faker } from '@faker-js/faker';

describe('pisano automation challenge',() => {
    beforeEach('baseUrl visit', () => {
        cy.visit('https://stage.pisano.co/widget_test.html?code=PSN-cg56fpn&env=stage')
    })

    it('first scenario', () => {
        
        const iframe1 = cy.get('#psn-widget-button-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="widget-button"]')
        .click()

        let random1 = faker.datatype.number({ max: 10 })
        const iframe2 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button button--nps"]')
        .eq(random1)
        .click()

        let random2 = faker.datatype.number({ max: 4 })
        const iframe3 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button"]')
        .eq(random2)
        .click()

        const iframe4 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button button--primary"]')
        .eq(0)
        .click()

        let text = faker.lorem.paragraph()	
        const iframe5 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[placeholder="Click here"]')
        .eq(0)
        .click()
        .type(text)

        const iframe6 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(3)
        .click()

        const iframe7 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(5)
        .click()

        const iframe8 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(7)
        .click()

        let email = faker.internet.email()
        const iframe9 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[type="email"]')
        .eq(0)
        .click()
        .type(email)

        let firstName = faker.name.firstName();
        const iframe10 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[type="text"]')
        .eq(0)
        .click()
        .type(firstName)

        
        let phone = faker.datatype.number({ min: 9999999999 })
        const iframe11 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[type="tel"]')
        .eq(0)
        .click()
        .type(phone)

        const iframe12 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button button--primary"]')
        .eq(0)
        .click()

        const iframe13 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="components P4 components--thank-state"]')
        .should('have.text','Thanks, I think test were succeeded\n')
        .should('exist')
        
    })

    it('second scenario', () => {
        const iframe1 = cy.get('#psn-widget-button-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="widget-button"]')
        .click()

        let random1 = faker.datatype.number({ max: 10 })
        const iframe2 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button button--nps"]')
        .eq(random1)
        .click()

        let random2 = faker.datatype.number({ max: 4 })
        const iframe3 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button"]')
        .eq(random2)
        .click()

        const iframe4 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="button button--primary"]')
        .eq(0)
        .click()

        let text = faker.lorem.paragraph()	
        const iframe5 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[placeholder="Click here"]')
        .eq(0)
        .click()
        .type(text)

        const iframe6 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(4)
        .click()

        const iframe7 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(5)
        .click()

        const iframe8 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[role="button"]')
        .eq(7)
        .click()

        const iframe14 = cy.get('#psn-widget-content-frame')
        .its('0.contentDocument.body')
        .then(cy.wrap)
        .find('[class="components P1"]')
        .should('exist')

    })

})