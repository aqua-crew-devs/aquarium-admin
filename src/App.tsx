import React from "react";
import "./App.css";
import Container from "./components/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ChannelManager from "./pages/ChannelManager";
import "antd/dist/antd.css";

const App: React.FC = () => {
  return (
    <Router>
      <Container>
        <Switch>
          <Route path="/channel-manager">
            <ChannelManager></ChannelManager>
          </Route>
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
