import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;