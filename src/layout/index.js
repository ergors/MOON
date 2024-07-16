import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import Toolbar from "components/Toolbar/Toolbar";
import Dashboard from "views/Dashboard";

var ps;

const Layout = (props) => {
  //const [backgroundColor, setBackgroundColor] = React.useState("black");
  //const [activeColor, setActiveColor] = React.useState("info");
  const mainPanel = React.useRef();
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  });
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
