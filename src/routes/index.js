import React from "react";
import PageNotFound from "../containers/404";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "../containers/dashboard";
import Tournament from "../containers/tournament";
import Home from "../containers/home";

const ReactRoute = ({ setDialogBox }) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index path="/dashboard" element={<Dashboard />} />
        <Route
          path="/tournament"
          element={<Tournament setDialogBox={setDialogBox} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
export default ReactRoute;
