import React from "react";
import { useBoolean, useAsync } from "@umijs/hooks";
import { Button, Row, Col, Modal, message, Spin } from "antd";
import CreateChannelForm, {
  CreateChannelFormGatheredInfo
} from "./CreateChannelForm";
import { createChannel } from "../../apis/channel";

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

  function handleOpenCreateChannel() {
    openCreateChannel();
  }
  function handleCloseCreateChannel() {
    closeCreateChannel();
  }

  function handleCreateChannel(data: CreateChannelFormGatheredInfo) {
    initialCreateChannel(data);
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
