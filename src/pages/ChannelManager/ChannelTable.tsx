import React from "react";
import { Channel } from "../../types/channel";
import { Table, Button } from "antd";
import Column from "antd/lib/table/Column";
import Avatar from "../../components/Avatar";
import styles from "./ChannelTable.module.scss";
import moment from "moment";

interface ChannelTableProps {
  channels: Channel[];
}

function ChannelTable(props: ChannelTableProps) {
  return (
    <Table dataSource={props.channels}>
      <Column title="ID" key="id" dataIndex="id"></Column>
      <Column
        title="频道"
        key="thumbnailUrl"
        render={(channel: Channel) => {
          return (
            <>
              <Avatar
                url={channel.thumbnailUrl}
                alt={`${channel.name}'s thumbnail`}
              ></Avatar>
              <span className={styles.name}>{channel.name}</span>
            </>
          );
        }}
      ></Column>
      <Column
        title="创建日期"
        key="createdAt"
        dataIndex="createdAt"
        render={(createdAt: Date) => {
          return moment(createdAt).format("YYYY-MM-DD");
        }}
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
              <Button className={styles.button} type="danger" icon="delete">
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
