describe("Login", () => {
  it("should log user in and redirect to dashboard", () => {
    cy.server();
    cy.route({
      url: "/api/v1/users/login",
      method: "POST",
      response: ""
    });

    cy.visit("/login");
    cy.get("#username").type("fakeuser");
    cy.get("#password").type("fake_password");
    cy.contains("登 录").click();
    cy.location("pathname").should("eq", "/");
  });

  it("should show username of password error, if credential is wrong", () => {
    cy.server();
    cy.route({
      url: "/api/v1/users/login",
      method: "POST",
      response: "",
      status: 403
    });

    cy.visit("/login");
    cy.get("#username").type("fakeuser");
    cy.get("#password").type("fake_password");
    cy.contains("登 录").click();
    cy.contains("登录失败：用户名或者密码错误");
  });

  it("should redirect to url indicated by from, if login success", () => {
    cy.server();
    cy.route({
      url: "/api/v1/users/login",
      method: "POST",
      response: ""
    });

    cy.visit("/login?from=/helloworld");
    cy.get("#username").type("fakeuser");
    cy.get("#password").type("fake_password");
    cy.contains("登 录").click();
    cy.location("pathname").should("eq", "/helloworld");
  });
});
