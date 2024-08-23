describe("template spec", () => {
  it("My first test", () => {
    // Visitar una página
    cy.visit("https://example.cypress.io");

    // Ver si esa página contiene la palabra 'type' y hacerle un click
    cy.contains("type").click();

    // Comprobar que nos llevó a otra url que incluye /commands/actions
    cy.url().should("include", "/commands/actions");

    // Tomar un elemento, en este caso un input por su nombre de clase y escribir en él
    cy.get(".action-email").type("fake@email.com");

    // Comprobar que el valor fue actualizado
    cy.get(".action-email").should("have.value", "fake@email.com");
  });
});
