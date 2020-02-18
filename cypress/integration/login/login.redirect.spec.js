describe("Login", () => {
  it("should log user in and redirect to dashboard", () => {
    cy.visit("/login");
    cy.get("#username").type("fakeuser");
    cy.get("#password").type("fake_password");
    cy.contains("登 录").click();
  });
});
