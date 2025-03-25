describe("CSS Locators", () => {
  it("testCSSLocators", () => {
    cy.visit("https://www.mercadolibre.com.ar/");

    cy.get("#cb1-edit").type("ryzen{enter}");
    
    cy.get("#cb1-edit").should("have.value", "ryzen");

  })
});
