import React, { useCallback, useRef } from "react";
import styles from "./index.module.scss";
import { Input, Row, Col, Button, message } from "antd";
import "antd/dist/antd.css";
import useUser from "../../hooks/user";
import Password from "antd/lib/input/Password";
import { useHistory, useLocation } from "react-router-dom";

function Login() {
  const { login } = useUser();
  const usernameInput = useRef<Input>(null);
  const passwordInput = useRef<Password>(null);
  const history = useHistory();
  const from = new URLSearchParams(useLocation().search).get("from");

  const handleLogin = useCallback(async () => {
    if (usernameInput.current && passwordInput.current) {
      try {
        await login(
          usernameInput.current.state.value,
          passwordInput.current.input.value
        );
        message.success("登录成功");
        history.replace(from ? from : "/");
      } catch {
        message.error("登录失败：用户名或者密码错误");
      }
    }
  }, [login]);

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <label htmlFor="username">用户名</label>
          </Col>
          <Col span={24 - 6}>
            <Input ref={usernameInput} id="username"></Input>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <label htmlFor="password">密码</label>
          </Col>
          <Col span={24 - 6}>
            <Input.Password ref={passwordInput} id="password"></Input.Password>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Button
            data-testId="login-button"
            type="primary"
            onClick={handleLogin}
          >
            登录
          </Button>
        </Row>
      </div>
    </div>
  );
}

export default Login;
