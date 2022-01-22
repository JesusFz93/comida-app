import React from "react";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";

import { HomePage } from "../pages/HomePage";
import { MenuPage } from "../pages/MenuPage";

const Routers = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path="/menu" element={<MenuPage />} />

        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default Routers;
