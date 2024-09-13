describe("Handle tabs", () => {
  it("Approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    // Quitamos el atributo target="_blank" del elemento para que no se abra en una nueva pestaña

    cy.get(".example>a").invoke("removeAttr", "target").click();

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    // Realizamos las operaciones que necesitemos

    cy.wait(5000);

    // Para volver a la ventana anterior ejecutamos el siguiente comando:

    cy.go("back");
  });

  it("Approach 2", () => {
    // Este método funcionará solo si la página hacia la que nos queremos dirigir se encuentra en el mismo domino, sin importar el subdominio. En este caso funcionará porque el main domain es el mismo: https://the-internet.herokuapp.com/

    cy.visit("https://the-internet.herokuapp.com/windows");

    // Visitamos la página obteniendo el enlace del atributo href

    cy.get(".example>a").then((e) => {
      let url = e.prop("href");

      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000);

    cy.go("back");
  });
});
