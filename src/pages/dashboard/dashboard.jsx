import React from "react";
import { Route, Routes } from "react-router-dom";

import { Overview } from "../dashboard/overview";

export const Dashboard = () => {
  return (
    <div className="d-flex">
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
};
