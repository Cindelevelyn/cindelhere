import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Projects } from "../pages/Projects";
import { Index } from '../pages/Index'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" element={<Index/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
