import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "..";

describe("Login", () => {
  it("should attempts to login user when click login", () => {
    const login = jest.fn();
    const useUserMock = jest.mock("../../../hooks/user", () => {
      return () => {
        return {
          login: jest.fn()
        };
      };
    });
    const { getByTestId, getByLabelText } = render(<Login></Login>);

    fireEvent.change(getByLabelText("用户名"), {
      target: { value: "username" }
    });
    fireEvent.change(getByLabelText("密码"), { target: { value: "password" } });
    fireEvent.click(getByTestId("login-button"));
  });
});
