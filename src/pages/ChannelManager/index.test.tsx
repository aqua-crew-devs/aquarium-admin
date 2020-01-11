import React from "react";
import {
  render,
  fireEvent,
  getByText as getByTextGlobal
} from "@testing-library/react";
import ChannelManager from ".";

describe("Channel Manager", () => {
  it("should have a title", () => {
    const { getByText } = render(<ChannelManager></ChannelManager>);

    expect(getByText("频道管理"));
  });

  it("should have a create channel button", () => {
    const { getByText } = render(<ChannelManager></ChannelManager>);

    expect(getByText("新增频道")).toBeInTheDocument();
  });

  it("should pop up create channel modal when clicking create channel button", () => {
    const { getByText } = render(<ChannelManager></ChannelManager>);

    expect(getByText("新增频道")).toBeInTheDocument();
    fireEvent.click(getByText("新增频道"));

    expect(getByTextGlobal(document.body, "新建一个频道")).toBeInTheDocument();
  });
});
