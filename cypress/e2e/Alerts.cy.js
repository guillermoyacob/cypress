describe("template spec", () => {
  // Cypress cierra automáticamente los mensajes de alerts pero igualmente podemos hacer validaciones.

  it("JavaScript Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    // Cypress cerrará la ventana de alerta
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it("JavaScript Confirmation Alert Accept", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // Cypress cerrará la ventana de confirmación de alerta con Aceptar.
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("JavaScript Confirmation Alert Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    // Cypress cerrará la ventana de confirmación de alerta con Aceptar.
    // Si queremos cancelar deberemos hacer lo siguiente:
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (t) => {
      expect(t).to.contains("I am a JS Confirm");
    });
    cy.on("window:confirm", () => false);
    cy.get("#result").should("have.text", "You clicked: Cancel");
  });

  it("JavaScript Prompt Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((window) => {
      // Primero debemos pasar el texto que queremos ingresar
      cy.stub(window, "prompt").returns("¡Hola!");
    });
    // Luego le damos al click para que aparezca el prompt
    cy.get("button[onclick='jsPrompt()']").click();
    // Cypress automáticamente Aceptará la ventana de alerta del prompt
    // Finalmente realizamos la comprobación
    cy.get("#result").should("have.text", "You entered: ¡Hola!");
  });

  it("JavaScript Authenticated Alert 1", () => {
    // Primer método
    cy.visit("https://the-internet.herokuapp.com/basic_auth", {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    cy.get("div.example p").should("have.contain", "Congratulations");
  });

  it("JavaScript Authenticated Alert 2", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get("div.example p").should("have.contain", "Congratulations");
  });
});
