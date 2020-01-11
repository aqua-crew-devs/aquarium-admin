import React from "react";
import { useBoolean } from "@umijs/hooks";
import { Button, Row, Col, Modal } from "antd";
import CreateChannelForm from "./CreateChannelForm";

function ChannelManager() {
  const {
    state: isCreateChannelVisible,
    setTrue: openCreateChannel,
    setFalse: closeCreateChannel
  } = useBoolean(false);

  function handleOpenCreateChannel() {
    openCreateChannel();
  }
  function handleCloseCreateChannel() {
    closeCreateChannel();
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
        <CreateChannelForm></CreateChannelForm>
      </Modal>
    </div>
  );
}

export default ChannelManager;
