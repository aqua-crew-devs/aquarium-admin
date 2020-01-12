import React from "react";
import useUser from "./hooks/user";
import { mocked } from "ts-jest";
import { render, wait } from "@testing-library/react";
import { App } from "./App";
import { MemoryRouter } from "react-router-dom";

jest.mock("./hooks/user");

const mockedUseUser = mocked(useUser);

const DEFAULT_USE_USER: ReturnType<typeof useUser> = {
  isLoggedIn: false,
  currentUser: { username: "" },
  login: jest.fn(),
  logout: jest.fn()
};

describe("app", () => {
  it("should redirect to login page when user is not authenticated", async () => {
    mockedUseUser.mockReturnValue({
      ...DEFAULT_USE_USER,
      isLoggedIn: false
    });

    const { getByText } = render(<App></App>, { wrapper: MemoryRouter });
    await wait();
    expect(getByText("用户名")).toBeInTheDocument();
  });
  it("should stay at login page when user is authenticated", async () => {
    mockedUseUser.mockReturnValue({
      ...DEFAULT_USE_USER,
      isLoggedIn: true
    });

    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <App></App>
      </MemoryRouter>
    );
    await wait();
    expect(getByText("仪表盘")).toBeInTheDocument();
  });
});
