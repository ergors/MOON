import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Table,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import Editor from "components/editor/Editor.js";
import Console from "components/console/Console";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="content">
      <Row>
        <Col md="8">
          <Card>
            <CardHeader>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === 1 ? "active" : ""}
                    onClick={() => toggleTab(1)}
                  >
                    Edit
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === 2 ? "active" : ""}
                    onClick={() => toggleTab(2)}
                  >
                    Execute
                  </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activeTab}>
                <TabPane tabId={1}>
                  <Editor />
                </TabPane>
                <TabPane tabId={2}>
                  <p>Execution pane, showing binary machine code.</p>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>

          <Card>
            <Console />
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ height: "100%" }}>
            <CardHeader>Registers</CardHeader>
            <CardBody>
              <Table responsive>
                <thead className="text-primary">
                  <th>Name</th>
                  <th>Country</th>
                  <th>City</th>
                  <th className="text-right">Salary</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Dakota Rice</td>
                    <td>Niger</td>
                    <td>Oud-Turnhout</td>
                    <td className="text-right">$36,738</td>
                  </tr>
                  <tr>
                    <td>Minerva Hooper</td>
                    <td>Curaçao</td>
                    <td>Sinaai-Waas</td>
                    <td className="text-right">$23,789</td>
                  </tr>
                  <tr>
                    <td>Sage Rodriguez</td>
                    <td>Netherlands</td>
                    <td>Baileux</td>
                    <td className="text-right">$56,142</td>
                  </tr>
                  <tr>
                    <td>Philip Chaney</td>
                    <td>Korea, South</td>
                    <td>Overland Park</td>
                    <td className="text-right">$38,735</td>
                  </tr>
                  <tr>
                    <td>Doris Greene</td>
                    <td>Malawi</td>
                    <td>Feldkirchen in Kärnten</td>
                    <td className="text-right">$63,542</td>
                  </tr>
                  <tr>
                    <td>Mason Porter</td>
                    <td>Chile</td>
                    <td>Gloucester</td>
                    <td className="text-right">$78,615</td>
                  </tr>
                  <tr>
                    <td>Jon Porter</td>
                    <td>Portugal</td>
                    <td>Gloucester</td>
                    <td className="text-right">$98,615</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
