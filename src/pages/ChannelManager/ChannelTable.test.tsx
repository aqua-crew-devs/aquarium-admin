import React from "react";
import { Channel } from "../../types/channel";
import timezoneMock from "timezone-mock";
import { render } from "@testing-library/react";
import ChannelTable from "./ChannelTable";

const testChannel: Channel = {
  id: "abcde",
  name: "test channel",
  description: "a channel",
  customUrl: "abc",
  createdAt: new Date("1995-12-17T03:24:00"),
  thumbnailUrl: "https://thumbnailUrl.com"
};

describe("ChannelTable", () => {
  it("should show channels info", () => {
    timezoneMock.register("UTC");
    // for timezone mocking, we have to copy and paste testChannel
    const testChannels: Channel[] = [
      {
        id: "abcde",
        name: "test channel",
        description: "a channel",
        customUrl: "abc",
        createdAt: new Date("1995-12-17T03:24:00"),
        thumbnailUrl: "https://thumbnailUrl.com"
      }
    ];

    const { getByText, getByAltText } = render(
      <ChannelTable channels={testChannels}></ChannelTable>
    );

    expect(getByText("test channel")).toBeInTheDocument();
    expect(getByText("1995-12-17")).toBeInTheDocument();
    expect(getByAltText("test channel's thumbnail")).toBeInTheDocument();
    timezoneMock.unregister();
  });

  it("should show operation buttons", () => {
    const testChannels: Channel[] = [testChannel];

    const { getByText } = render(
      <ChannelTable channels={testChannels}></ChannelTable>
    );

    expect(getByText("查看详情")).toBeInTheDocument();
    expect(getByText("删除频道")).toBeInTheDocument();
  });
});
