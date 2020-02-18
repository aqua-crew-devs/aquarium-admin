describe("Protected Route", () => {
  it("should redirect to login, if user is not login", () => {
    cy.visit("/helloworld");
    cy.location("pathname").should("eq", "/login");

    cy.server();
    cy.route({
      url: "/api/v1/users/login",
      method: "POST",
      response: ""
    });

    cy.get("#username").type("fakeuser");
    cy.get("#password").type("fake_password");
    cy.contains("登 录").click();
    // redirect to previous page
    cy.location("pathname").should("eq", "/helloworld");
  });
});
