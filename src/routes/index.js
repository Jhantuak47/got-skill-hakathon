import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

// Components
// constants
import { ROUTE_NAME } from "../constants";
import Dadhboard from "../containers/dashboard";
import PageNotFound from "../containers/404";

const ReactRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTE_NAME.DASHBOARD} element={Dadhboard} exact={true} />
        <Route path="*" element={PageNotFound} />
      </Routes>
    </Router>
  );
};
export default ReactRoute;
