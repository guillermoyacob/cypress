describe(
  "Checking Radio Buttons and Checkboxes",
  {
    viewportHeight: 900,
    viewportWidth: 1600,
  },
  () => {
    it("Checking Radio Buttons", () => {
      cy.visit("https://es.wikipedia.org/wiki/Bot%C3%B3n_de_opci%C3%B3n");

      // Corroborar que los elementos existan en el DOM
      cy.get("input[type='radio'][value='0']").should("exist");
      cy.get("input[type='radio'][value='1']").should("exist");
      cy.get("input[type='radio'][value='2']").should("exist");

      // Seleccionar radio buttons
      cy.get("input[type='radio'][value='0']").check().should("be.checked");
      cy.get("input[type='radio'][value='1']").should("not.be.checked");
      cy.get("input[type='radio'][value='2']").should("not.be.checked");
    });

    it("Checking Checkboxes", () => {
      cy.visit(
        "https://lenguajehtml.com/html/formularios/etiqueta-html-input-checkbox-radio/"
      );

      // Corroboramos que los elementos existan dentro del DOM
      cy.get("tbody tr:nth-child(1) td:nth-child(3) input:nth-child(1)").should(
        "exist"
      );
      cy.get("tbody tr:nth-child(1) td:nth-child(3) input:nth-child(2)").should(
        "exist"
      );
      cy.get("#ind").should("exist");

      // Seleccionando y deseleccionando checkboxes
      cy.get("tbody tr:nth-child(1) td:nth-child(3) input:nth-child(1)")
        .uncheck()
        .should("not.be.checked");
      cy.get("tbody tr:nth-child(1) td:nth-child(3) input:nth-child(2)")
        .check()
        .should("be.checked");
      cy.get("#ind").check().should("be.checked");

      // Seleccionando los primeros 3 checkboxes que están dentro de un td
      cy.get("td input[type = 'checkbox']").uncheck().should("not.be.checked");
      cy.get("td input[type = 'checkbox']").check().should("be.checked");

      // Seleccionando el primer y último checkbox de esos 3 que están dentro de un td
      cy.get("td input[type = 'checkbox']")
        .first()
        .uncheck()
        .should("not.be.checked");
      cy.get("td input[type = 'checkbox']")
        .last()
        .uncheck()
        .should("not.be.checked");
    });
  }
);
