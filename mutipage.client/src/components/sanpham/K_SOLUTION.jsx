import React from "react";
import { Outlet } from "react-router-dom";

function K_SOLUTION() {
  return (
    <div className="home">
      <div class="container">
        <h1 className="text-center mt-5">K_SOLUTION </h1>
        <Outlet />
      </div>
    </div>
  );
}

export default K_SOLUTION;
