import React from "react";
import { Channel } from "../../types/channel";
import timezoneMock from "timezone-mock";
import { render } from "@testing-library/react";
import ChannelTable from "./ChannelTable";

describe("ChannelTable", () => {
  it("should show channels info", () => {
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

    timezoneMock.register("UTC");
    const { getByText, getByAltText } = render(
      <ChannelTable channels={testChannels}></ChannelTable>
    );

    expect(getByText("abced")).toBeInTheDocument();
    expect(getByText("test channel")).toBeInTheDocument();
    expect(getByText("a channel")).toBeInTheDocument();
    expect(getByText("1995-12-17 03:24:00")).toBeInTheDocument();
    expect(getByAltText("abcde's thumbnail")).toBeInTheDocument();
  });
});
