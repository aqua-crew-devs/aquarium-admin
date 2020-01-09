import React, { FC } from "react";
import { Layout, Menu } from "antd";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const { Sider, Content } = Layout;

const Container: FC = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu theme="dark">
          <Menu.Item key="1">
            <Link to="/channel-manager">频道管理</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>
          <main className={styles.container}>{children}</main>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Container;
