import React from "react";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "antd";
import Dashboard from "./pages/Dashboard";
import ChannelManager from "./pages/ChannelManager";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/channel-manager">
            <ChannelManager></ChannelManager>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
