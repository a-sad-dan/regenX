// dependencies
import React from "react";
import { Outlet } from "react-router";

const HomeLayout: React.FC = () => {
  return (
    <div className="layout items-center justify-center">
      <Outlet />
    </div>
  );
};

export default HomeLayout;
