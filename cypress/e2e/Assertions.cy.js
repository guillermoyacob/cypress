describe("Assertions demo", () => {
  it("Implicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    // Las dos palabras claves en Implicit assertions son: should y and

    //cy.url().should("include", "orangehrmlive.com")

    //cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //cy.url().should("contain", "orangehrm");

    /*
    cy.url().should("include", "orangehrmlive.com")
      .should(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      )
      .should("contain", "orangehrm");
      */

    cy.url() // accedemos a la url
      .should("include", "orangehrmlive.com") // que la url incluya esa cadena de texto
      .and(
        "eq",
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      ) // que sea igual a esa url
      .and("contain", "orangehrm") // que la url contenga orangehrm
      .and("not.contain", "greenhrm"); // que la url no contenga greenhrm

    cy.title() // accedemos al título de la página
      .should("include", "Orange") // que el título incluya Orange
      .and("eq", "OrangeHRM") // Que sea igual a OrangeHRM
      .and("contain", "HRM"); // Que el título contenga HRM

    cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist"); // Que la imagen del logo sea visible y exista dentro del DOM

    cy.get("a").should("have.length", "5"); // Que todos los elementos 'a' sean 5

    cy.get('input[placeholder = "Username"]') // Identificamos el input de usuario
      .type("Admin") // Escribimos en el input de usuario
      .should("have.value", "Admin"); // Checkeamos que el valor sea el correcto
  });

  it("Explicit assertions", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.get("input[placeholder='Username']").type("Admin");

    cy.get("input[placeholder='Password']").type("admin123");

    cy.get("button[type='submit']").click();

    let expName = "xyz";

    cy.get(".oxd-userdropdown-name").then((x) => {
      let actName = x.text();

      // Assertions estilo BDD
      // expect(actName).to.equal(expName);
      expect(actName).to.not.equal(expName);

      // Assertions estilo TDD
      // assert.equal(actName, expName);
      assert.notEqual(actName, expName);
    });
  });
});
