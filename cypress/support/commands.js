// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Configuración del tiempo de espera para una respuesta
Cypress.config("defaultCommandTimeout", 10000); // 10 segundos

// Comando personalizado para acceder más facilmente a un iFrame usado en el Approach 2 del archivo Frames
Cypress.Commands.add("getIFrame", (iFrame) => {
  return cy
    .get(iFrame)
    .its("0.contentDocument.body")
    .should("be.visible")
    .then(cy.wrap);
});
