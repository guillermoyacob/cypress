describe("template spec", () => {
  it("Dropdown with select", () => {
    cy.visit("https://guillermoyacob.github.io/calculadoradepropinas/");

    cy.get("#totalPropinas").type("20000").should("have.value", "20000");

    cy.get("#nombre").type("Pepe").should("have.value", "Pepe");
    cy.get("#horas").select("4").should("have.value", "4");
    cy.get("#minutos").select("45").should("have.value", "45");
    cy.get("#anadir").click();

    cy.get("#nombre").clear();

    cy.get("#nombre").type("Yo").should("have.value", "Yo");
    cy.get("#horas").select("5").should("have.value", "5");
    cy.get("#minutos").select("30").should("have.value", "30");
    cy.get("#anadir").click();

    cy.get("#nombre").clear();

    cy.get("#calcular").click();
  });

  it("Dropdown without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    cy.get("#select2-billing_country-container").click();
    cy.get("input.select2-search__field").type("Argentina{enter}");
    cy.get("#select2-billing_country-container").should(
      "have.text",
      "Argentina"
    );
    cy.get("#select2-billing_state-container").click();
    cy.get("input.select2-search__field")
      .type("Buenos Aires")
      .type("{downarrow}{enter}");
    cy.get("#select2-billing_state-container").should(
      "have.text",
      "Buenos Aires"
    );
  });

  it("Dropdown with suggested options", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Tandil");
    cy.get(".suggestion-title").contains("Tandil").click();
  });

  it("Dynamic Dropdown", () => {
    cy.visit("https://www.google.com/");
    cy.get("textarea[name='q']").type("Cypress Automation");
    cy.get("div.wM6W7d[role='presentation']>span").should("have.length", "10");
    cy.get("div.wM6W7d[role='presentation']>span").each(
      ($element, index, $list) => {
        if ($element.text() == "cypress automation tutorial") {
          //para usar comandos de Cypress en el elemento hay que hacerle un wrap:
          cy.wrap($element).click();
        }
      }
    );
    // Realizamos una espera para que pueda cargar la nueva búsqueda, así podemos evaluar la barra de búsqueda nueva con el nuevo valor.
    cy.wait(3000);
    cy.get("textarea[name='q']").should(
      "have.value",
      "cypress automation tutorial"
    );
  });
});
