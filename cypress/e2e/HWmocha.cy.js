//HW
const forTestURL = 'https://sanitarskyi-ngx-admin.herokuapp.com/';

describe('Param test', () => {

    describe('Enter data', () => {

        const paramTest = ({ testEmail, testPass, expectedResult1, expectedResult2 }) => function () {
            cy.visit(forTestURL);
            cy.get('.theme-preview[alt="Cosmic Theme"]').click();
            cy.get('.ng-tns-c141-9.ng-star-inserted[title="Forms"]').click();
            cy.get('.ng-tns-c141-11.ng-star-inserted[title="Form Layouts"]').click();
            cy.get('.mat-ripple.sidebar-toggle.mat-ripple-unbounded').click();
            cy.get('nb-layout-header').then($el => $el.remove());
            cy.get('nb-card-header:contains("Basic form") + nb-card-body input[placeholder="Email"]').type(testEmail);
            cy.get('nb-card-header:contains("Basic form") + nb-card-body input[placeholder="Email"]').should("contain.value", expectedResult1);
            cy.get('nb-card-header:contains("Basic form") + nb-card-body input[placeholder="Password"]').type(testPass);
            cy.get('nb-card-header:contains("Basic form") + nb-card-body input[placeholder="Password"]').should("contain.value", expectedResult2);
            cy.get('nb-card-header:contains("Basic form") + nb-card-body label:contains("Check me out")').click();
        }

        it(`enter data`, paramTest({ testEmail: 'luginetsmail@gmail.com', expectedResult1: 'luginetsmail@gmail.com', testPass: '852152', expectedResult2: '852152' }));

    })

})





