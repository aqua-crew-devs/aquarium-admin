import React from "react";
import "./App.css";
import Container from "./components/Container";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ChannelManager from "./pages/ChannelManager";
import "antd/dist/antd.css";
import useUser from "./hooks/user";
import Login from "./pages/login";

const ProtectedRoute: React.FC<any> = ({ children, ...rest }) => {
  const { isLoggedIn } = useUser();
  const targetPath = useLocation().pathname;
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{ pathname: "/login", search: `?from=${targetPath}` }}
          ></Redirect>
        );
      }}
    ></Route>
  );
};

export const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Container>
        <ProtectedRoute path="/channel-manager">
          <ChannelManager></ChannelManager>
        </ProtectedRoute>
        <ProtectedRoute path="/">
          <Dashboard></Dashboard>
        </ProtectedRoute>
      </Container>
    </Switch>
  );
};

const AppWithRouter: React.FC = () => {
  return (
    <Router>
      <App></App>
    </Router>
  );
};

export default AppWithRouter;
