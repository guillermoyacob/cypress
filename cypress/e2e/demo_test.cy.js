/// <reference types="cypress"/>

it("google test", () => {
  cy.visit("https://www.google.com");

  cy.get("#APjFqb").type("Tandil{enter}");
});

it.only("login test", () => {
  // Ir a la página
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // Tipear usuario
  cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "Admin"
  );

  // Tipear contraseña
  cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").type(
    "admin123"
  );

  // Dar click en el botón de loguearse
  cy.get(".oxd-button").click();

  // Dar click en Admin
  cy.get(":nth-child(1) > .oxd-main-menu-item").click();

  // Dar click en agregar usuario
  cy.get(".orangehrm-header-container > .oxd-button").click();

  // Dar click en guardar
  cy.get(".oxd-button--secondary").click();
});
