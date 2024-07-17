import React from "react";

import Toolbar from "./Toolbar";
import Dashboard from "./Dashboard";

const Layout = (props) => {
  //const [backgroundColor, setBackgroundColor] = React.useState("black");
  //const [activeColor, setActiveColor] = React.useState("info");
  /*
  const handleActiveClick = (color) => {
    setActiveColor(color);
  };
  const handleBgClick = (color) => {
    setBackgroundColor(color);
  };
  */
  return (
    <div className="main-panel">
      <Toolbar />
      <Dashboard />
    </div>
  );
};

export default Layout;
