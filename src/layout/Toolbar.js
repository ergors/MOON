import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Input,
  Label,
  Button,
  UncontrolledTooltip,
} from "reactstrap";
import { Icon } from "@iconify/react";

// Reusable ButtonWithTooltip component
const ButtonWithTooltip = ({ id, icon, tooltip, placement = "bottom" }) => (
  <NavItem>
    <Button color="primary" id={id} outline round>
      <Icon style={{ fontSize: "20px" }} icon={icon} />
    </Button>
    <UncontrolledTooltip placement={placement} target={id} delay={0}>
      {tooltip}
    </UncontrolledTooltip>
  </NavItem>
);

const FileHandlingSection = () => (
  <Nav className="mr-3">
    <ButtonWithTooltip
      id="newfile"
      icon="material-symbols:file-copy-outline"
      tooltip="New File"
    />
    <ButtonWithTooltip
      id="openfile"
      icon="material-symbols:folder-open"
      tooltip="Open File"
    />
    <ButtonWithTooltip
      id="savefile"
      icon="material-symbols:download"
      tooltip="Save File"
    />
  </Nav>
);

const BuildAndRunSection = () => (
  <Nav className="mr-3">
    <ButtonWithTooltip
      id="build"
      icon="material-symbols:build"
      tooltip="Build"
    />
    <ButtonWithTooltip
      id="play"
      icon="material-symbols:play-circle"
      tooltip="Run"
    />
    <ButtonWithTooltip
      id="playstep"
      icon="material-symbols:step"
      tooltip="Run One Step"
    />
  </Nav>
);

const ControlActionsSection = () => (
  <Nav className="mr-3">
    <ButtonWithTooltip id="stop" icon="material-symbols:stop" tooltip="Stop" />
    <ButtonWithTooltip
      id="reset"
      icon="material-symbols:device-reset"
      tooltip="Reset"
    />

    <NavItem className="ml-2">
      <Label for="run-speed">Run speed at max</Label>
      <Input
        type="range"
        id="run-speed"
        name="run-speed"
        min="1"
        max="10"
        step="1"
      />
    </NavItem>
  </Nav>
);

const HelpSection = () => (
  <Nav className="ml-auto align-items-center" navbar>
    <ButtonWithTooltip id="help" icon="material-symbols:help" tooltip="Help" />
    <NavItem className="ml-2">
      <a
        href="https://github.com/ergors/MOON"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon color="#333" style={{ fontSize: "42px" }} icon="mdi:github" />
      </a>
    </NavItem>
  </Nav>
);

function Toolbar() {
  return (
    <Navbar
      color="transparent"
      expand={true}
      className="navbar-relative fixed-top"
    >
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={require("assets/img/moon.png")}
          style={{ height: 50 }}
        />
      </NavbarBrand>
      <Nav navbar>
        <FileHandlingSection />
        <BuildAndRunSection />
        <ControlActionsSection />
      </Nav>
      <HelpSection />
    </Navbar>
  );
}

export default Toolbar;
