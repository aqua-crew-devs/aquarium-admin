import React from "react";
import { Channel } from "../../../types/channel";
import timezoneMock from "timezone-mock";
import {
  render,
  fireEvent,
  getByText as getByTextWith,
  wait,
  waitForElementToBeRemoved
} from "@testing-library/react";
import ChannelTable from "../ChannelTable";

const testChannel: Channel = {
  id: "abcde",
  name: "test channel",
  description: "a channel",
  published_at: "2018-08-01",
  thumbnail: "https://thumbnailUrl.com",
  country: "JP"
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
        published_at: "2018-08-01",
        thumbnail: "https://thumbnailUrl.com",
        country: "JP"
      }
    ];

    const { getByText, getByAltText } = render(
      <ChannelTable channels={testChannels}></ChannelTable>
    );

    expect(getByText("test channel")).toBeInTheDocument();
    expect(getByText("2018-08-01")).toBeInTheDocument();
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

  it("should show a confirm model when try to delete a channel", async () => {
    const testChannels: Channel[] = [testChannel];

    const handleDeleteChannel = jest.fn();
    const { getByText } = render(
      <ChannelTable
        channels={testChannels}
        onDeleteChannel={handleDeleteChannel}
      ></ChannelTable>
    );

    fireEvent.click(getByText("删除频道"));

    expect(
      getByTextWith(document.body, "是否确认删除【test channel】频道？")
    ).toBeInTheDocument();

    fireEvent.click(getByTextWith(document.body, "Cancel"));
    expect(handleDeleteChannel).not.toHaveBeenCalled();

    await waitForElementToBeRemoved(() => getByTextWith(document.body, "OK"));
    fireEvent.click(getByText("删除频道"));
    fireEvent.click(getByTextWith(document.body, "OK"));
    expect(handleDeleteChannel).toHaveBeenCalled();
  });
});
