import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact={true} key={999} />
    </Switch>
  );
}

export default AppRoutes;