describe("Bejelentkezés", () => {
    it("Login", () => {
      cy.visit("http://localhost:5173/");
      cy.get('button[class="landingbtn"]').should("exist");
      cy.get('button[class="landingbtn"]').click();
      cy.get('input[type="text"]').type("asd@gmail.com");
      cy.get('div[class="input-container"]')
        .get('input[type="password"]')
        .type("Start123");
      cy.get('div[class="loginbtn"]')
        .get('button[class="btn btn-primary"]')
        .click();
    });
  });