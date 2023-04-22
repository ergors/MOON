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
import React, { useState, useRef } from "react";
// reactstrap components
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
// core components
import Editor from "components/Editor/Editor.js";
import classnames from "classnames";

function Dashboard() {
  const [tab, setTab] = useState(1);
  let toggle = (newtab) => {
    if (tab !== newtab) setTab(newtab);
  };

  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tab === 1,
                      })}
                      onClick={() => {
                        toggle(1);
                      }}
                    >
                      Edit
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: tab === 2,
                      })}
                      onClick={() => {
                        toggle(2);
                      }}
                    >
                      Execute
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent activeTab={tab}>
                  <TabPane tabId={1}>
                    <Editor />
                  </TabPane>
                  <TabPane tabId={2}>
                    <p>Execute</p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>

            <Card style={{ width: "100%" }}>
              <CardHeader>Console</CardHeader>
              <CardBody>running hello.asm</CardBody>
            </Card>
          </Col>
          <Col md="4">
            <Card style={{ height: "100%" }}>
              <CardHeader>Registers</CardHeader>
              <CardBody>registers table</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
