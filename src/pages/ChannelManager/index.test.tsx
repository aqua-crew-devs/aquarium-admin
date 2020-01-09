import React from "react";
import { render } from "@testing-library/react";
import ChannelManager from ".";

describe("Channel Manager", () => {
  it("should have a title", () => {
    const { getByText } = render(<ChannelManager></ChannelManager>);

    expect(getByText("频道管理"));
  });
});
