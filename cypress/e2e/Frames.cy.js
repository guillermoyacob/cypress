import "cypress-iframe";

describe("Handling frames", () => {
  it("Forma 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe
      .invoke("attr", "contenteditable", "true")
      .should("have.attr", "contenteditable", "true");

    iframe.clear().type("¡Hola!{selectall}");

    cy.get("button[title='Bold']")
      .invoke("removeClass", "tox-tbtn--disabled")
      .invoke("addClass", "tox-tbtn--enabled")
      .should("have.class", "tox-tbtn--enabled")
      .and("not.have.class", "tox-tbtn--disabled");

    cy.get("button[title='Bold']")
      .invoke("attr", "aria-disabled", "false")
      .should("have.attr", "aria-disabled", "false");

    cy.get("button[title='Bold']").click();

    iframe.type("{rightarrow}");
  });

  it("Forma 2 - Usando comando personalizado o custom", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    const iframe = cy.getIFrame("#mce_0_ifr");

    iframe
      .invoke("attr", "contenteditable", "true")
      .should("have.attr", "contenteditable", "true");

    iframe.clear().type("Approach 2{selectall}");

    cy.get("button[title='Bold']")
      .invoke("removeClass", "tox-tbtn--disabled")
      .invoke("addClass", "tox-tbtn--enabled")
      .should("have.class", "tox-tbtn--enabled")
      .and("not.have.class", "tox-tbtn--disabled");

    cy.get("button[title='Bold']")
      .invoke("attr", "aria-disabled", "false")
      .should("have.attr", "aria-disabled", "false");

    cy.get("button[title='Bold']").click();

    iframe.type("{rightarrow}");
  });

  it("Forma 3 - Usando el plugin Cypress iframe", () => {
    // Instalamos el paquete:
    // npm install -D cypress-iframe
    // y lo importamos al comienzo del archivo:
    // import "cypress-iframe"

    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.frameLoaded("#mce_0_ifr"); // Carga el frame (load)

    cy.iframe("#mce_0_ifr")
      .invoke("attr", "contenteditable", "true")
      .should("have.attr", "contenteditable", "true")
      .clear()
      .type("Forma 3{selectall}");

    cy.get("button[title='Bold']")
      .invoke("removeClass", "tox-tbtn--disabled")
      .invoke("addClass", "tox-tbtn--enabled")
      .should("have.class", "tox-tbtn--enabled")
      .and("not.have.class", "tox-tbtn--disabled");

    cy.get("button[title='Bold']")
      .invoke("attr", "aria-disabled", "false")
      .should("have.attr", "aria-disabled", "false");

    cy.get("button[title='Bold']").click();

    cy.iframe("#mce_0_ifr").type("{rightarrow}");
  });
});
