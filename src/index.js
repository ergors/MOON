import React from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "assets/css/paper-dashboard.css";
import "assets/css/xterm.css";

import Layout from "layout/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Layout />
  </>
);
