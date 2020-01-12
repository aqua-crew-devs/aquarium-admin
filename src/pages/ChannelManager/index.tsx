import React from "react";
import { useBoolean, useAsync } from "@umijs/hooks";
import { Button, Row, Col, Modal, message, Spin } from "antd";
import CreateChannelForm, {
  CreateChannelFormGatheredInfo
} from "./CreateChannelForm";
import { createChannel, getChannels, deleteChannel } from "../../apis/channel";
import ChannelTable from "./ChannelTable";
import { Channel } from "../../types/channel";

function ChannelManager() {
  const {
    state: isCreateChannelVisible,
    setTrue: openCreateChannel,
    setFalse: closeCreateChannel
  } = useBoolean(false);

  const { loading, run: initialCreateChannel } = useAsync(createChannel, {
    manual: true,
    onSuccess: () => {
      message.success("频道创建成功~");
    },
    onError: (error: Error) => {
      message.error(error.message);
    }
  });

  const { data: channels } = useAsync(getChannels, {
    onError: (error: Error) => {
      message.error(error.message);
    }
  });

  const { run: initialDeleteChannel } = useAsync(deleteChannel, {
    manual: true,
    onSuccess: () => {
      message.success("频道删除成功");
    },
    onError: (error: Error) => {
      message.error(error.message);
    }
  });

  function handleOpenCreateChannel() {
    openCreateChannel();
  }
  function handleCloseCreateChannel() {
    closeCreateChannel();
  }

  function handleCreateChannel(data: CreateChannelFormGatheredInfo) {
    initialCreateChannel(data);
  }

  function handleDeleteChannel(channel: Channel) {
    initialDeleteChannel(channel.id);
  }

  return (
    <div>
      <h2>频道管理</h2>
      <Row type="flex" justify="end">
        <Col span={2}>
          <Button type="primary" onClick={handleOpenCreateChannel}>
            新增频道
          </Button>
        </Col>
      </Row>
      <ChannelTable
        channels={channels || []}
        onDeleteChannel={handleDeleteChannel}
      ></ChannelTable>
      <Modal
        title="新建一个频道"
        footer={null}
        visible={isCreateChannelVisible}
        onCancel={handleCloseCreateChannel}
      >
        <Spin tip="数据传输中" spinning={loading}>
          <CreateChannelForm onSubmit={handleCreateChannel}></CreateChannelForm>
        </Spin>
      </Modal>
    </div>
  );
}

export default ChannelManager;
