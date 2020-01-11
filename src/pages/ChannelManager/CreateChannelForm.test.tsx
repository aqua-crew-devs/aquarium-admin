import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CreateChannelForm from "./CreateChannelForm";

describe("CreateChannelForm", () => {
  it("should only have id field when auto mode", () => {
    const { getByTestId, queryByTestId } = render(
      <CreateChannelForm></CreateChannelForm>
    );

    expect(getByTestId("is-auto")).toBeInTheDocument();
    expect(getByTestId("youtube-id")).toBeInTheDocument();
    expect(queryByTestId("name")).not.toBeInTheDocument();
    expect(queryByTestId("thumbnail-url")).not.toBeInTheDocument();
    expect(queryByTestId("description")).not.toBeInTheDocument();
    expect(queryByTestId("created-at")).not.toBeInTheDocument();
  });

  it("should only have full fields when manual mode", () => {
    const { getByTestId } = render(<CreateChannelForm></CreateChannelForm>);

    // toggle auto mode to manual mode
    fireEvent.click(getByTestId("is-auto"));
    expect(getByTestId("is-auto")).toBeInTheDocument();
    expect(getByTestId("youtube-id")).toBeInTheDocument();
    expect(getByTestId("name")).toBeInTheDocument();
    expect(getByTestId("description")).toBeInTheDocument();
    expect(getByTestId("thumbnail-url")).toBeInTheDocument();
    expect(getByTestId("created-at")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const { asFragment } = render(<CreateChannelForm></CreateChannelForm>);
    expect(asFragment()).toMatchSnapshot();
  });
});
