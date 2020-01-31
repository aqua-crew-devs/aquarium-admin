import React from "react";
import { Channel } from "../../types/channel";
import { Table, Button, Modal } from "antd";
import Column from "antd/lib/table/Column";
import Avatar from "../../components/Avatar";
import styles from "./ChannelTable.module.scss";
import moment from "moment";

interface ChannelTableProps {
  channels: Channel[];
  onDeleteChannel?: (channel: Channel) => void;
}

function ChannelTable(props: ChannelTableProps) {
  function handleDeleteChannel(channel: Channel) {
    Modal.confirm({
      title: `是否确认删除【${channel.name}】频道？`,
      content: "删除操作会导致该频道的所有数据永久丢失",
      onOk() {
        props.onDeleteChannel && props.onDeleteChannel(channel);
      },
      onCancel() {}
    });
  }

  return (
    <Table dataSource={props.channels}>
      <Column title="ID" key="id" dataIndex="id"></Column>
      <Column
        title="频道"
        key="thumbnail"
        render={(channel: Channel) => {
          return (
            <>
              <Avatar
                url={channel.thumbnail}
                alt={`${channel.name}'s thumbnail`}
              ></Avatar>
              <span className={styles.name}>{channel.name}</span>
            </>
          );
        }}
      ></Column>
      <Column
        title="创建日期"
        key="published_at"
        dataIndex="published_at"
      ></Column>
      <Column
        title="操作"
        key="operation"
        render={(channel: Channel) => {
          return (
            <>
              <Button className={styles.button} type="default" icon="search">
                查看详情
              </Button>
              <Button
                className={styles.button}
                type="danger"
                icon="delete"
                onClick={() => handleDeleteChannel(channel)}
              >
                删除频道
              </Button>
            </>
          );
        }}
      ></Column>
    </Table>
  );
}

export default ChannelTable;
