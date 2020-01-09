import React from "react";
import { Channel } from "../../types/channel";
import { Table } from "antd";
import Column from "antd/lib/table/Column";

interface ChannelTableProps {
  channels: Channel[];
}

interface AvatarProps {
  url: string;
  alt: string;
}
function Avatar(props: AvatarProps) {}

function ChannelTable(props: ChannelTableProps) {
  return (
    <Table dataSource={props.channels}>
      <Column
        title="头像"
        dataIndex="thumbnailUrl"
        key="thumbnailUrl"
        render={(thumbailUrl: string, channel: Channel) => {
          return (
            <Avatar
              url={thumbailUrl}
              alt={`${channel.name}'s thumbnail`}
            ></Avatar>
          );
        }}
      ></Column>
    </Table>
  );
}

export default ChannelTable;
