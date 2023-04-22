/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Label,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { Icon } from "@iconify/react";

import routes from "routes.js";

function Toolbar(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [color, setColor] = React.useState("transparent");
  const sidebarToggle = React.useRef();
  const location = useLocation();
  const toggle = () => {
    if (isOpen) {
      setColor("transparent");
    } else {
      setColor("dark");
    }
    setIsOpen(!isOpen);
  };

  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && isOpen) {
      setColor("dark");
    } else {
      setColor("transparent");
    }
  };
  React.useEffect(() => {
    window.addEventListener("resize", updateColor.bind(this));
  });
  React.useEffect(() => {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      sidebarToggle.current.classList.toggle("toggled");
    }
  }, [location]);
  return (
    // add or remove classes depending if we are on full-screen-maps page or not
    <Navbar
      color={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "dark"
          : color
      }
      expand="lg"
      className={
        props.location.pathname.indexOf("full-screen-maps") !== -1
          ? "navbar-absolute fixed-top"
          : "navbar-absolute fixed-top " +
            (color === "transparent" ? "navbar-transparent " : "")
      }
    >
      <Container fluid>
        <div className="navbar-wrapper title">
          <NavbarBrand href="/" className="text-info">
            M🌑ON
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle}>
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
          <span className="navbar-toggler-bar navbar-kebab" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar className="justify-content-start">
          <Nav navbar>
            {/* FILE MANAGEMENT */}
            <div style={{ width: "2em" }}></div>
            <NavItem>
              <Button color="primary" id="newfile" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:file-copy-outline"
                />
              </Button>
              <UncontrolledTooltip
                placement="bottom"
                target="newfile"
                delay={0}
              >
                New File
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="openfile" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:folder-open"
                />
              </Button>
              <UncontrolledTooltip
                placement="bottom"
                target="openfile"
                delay={0}
              >
                Open File
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="savefile" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:download"
                />
              </Button>
              <UncontrolledTooltip
                placement="bottom"
                target="savefile"
                delay={0}
              >
                Save File
              </UncontrolledTooltip>
            </NavItem>
            {/* BUILD & EXECUTION */}
            <div style={{ width: "2em" }}></div>
            <NavItem>
              <Button color="primary" id="build" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:build"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="build" delay={0}>
                Build
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="play" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:play-circle"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="play" delay={0}>
                Play
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="playstep" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:step"
                />
              </Button>
              <UncontrolledTooltip
                placement="bottom"
                target="playstep"
                delay={0}
              >
                Play One Step
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="stop" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:stop"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="stop" delay={0}>
                Stop
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <Button color="primary" id="reset" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:device-reset"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="reset" delay={0}>
                Reset
              </UncontrolledTooltip>
            </NavItem>
            {/* SETTINGS & HELP */}
            <div style={{ width: "2em" }}></div>
            <NavItem>
              <Button color="primary" id="help" outline round>
                <Icon
                  style={{ fontSize: "20px" }}
                  icon="material-symbols:help"
                />
              </Button>
              <UncontrolledTooltip placement="bottom" target="help" delay={0}>
                Help
              </UncontrolledTooltip>
            </NavItem>
            <div style={{ width: "2em" }}></div>
            <NavItem>
              <Label for="run-speed">Run speed at max</Label>
              <Input
                type="range"
                id="run-speed"
                name="run-speed"
                min="1"
                max="10"
                step="1"
              />
              <div className="pipes">
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
                <div className="pipe"></div>
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default Toolbar;
