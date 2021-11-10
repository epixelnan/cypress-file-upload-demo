// upload.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

it('successful-img-upload', () => {
	cy.visit('http://localhost:3000/');
	cy.get('#img').attachFile('240px-Crab_Nebula.jpg');
	cy.get('form').submit();
	cy.url().should('contains', 'http://localhost:3000/');
	cy.get('p').first().should('contain', 'Success! mimetype: image/jpeg');
})

it('successful-json-upload', () => {
	cy.visit('http://localhost:3000/');
	cy.get('#img').attachFile('example.json');
	cy.get('form').submit();
	cy.url().should('contains', 'http://localhost:3000/');
	cy.get('p').first().should('contain', 'Success! mimetype: application/json');
})

it('failed-upload', () => {
	cy.visit('http://localhost:3000/');
	cy.get('form').submit();
	cy.url().should('contains', 'http://localhost:3000/');
	cy.get('p').first().should('contain', 'No files found in the form.');
})
