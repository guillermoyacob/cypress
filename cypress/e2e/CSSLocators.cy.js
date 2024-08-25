describe("CSS Locators", () => {
  it("testCSSLocators", () => {
    cy.visit("https://www.mercadolibre.com.ar/");

    cy.get(".nav-search-input[name='as_word']").type("ryzen{enter}");

    cy.get(".ui-search-breadcrumb__title").contains("Ryzen");
  });
});
