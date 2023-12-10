import React from "react";
import "./TodoBox.scss";
import { Row, Col,Tab,Nav } from "react-bootstrap";
const TodoBox = () => {
  return (
    <div className="todobox">
      <div className="formpart">
        <form>
          <h3>Add New Todo</h3>
          <Row className="inputwrapper">
            <Col lg={4}>
              <div className="commoninput">
                <p>Title</p>
                <input type="text" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="commoninput">
                <p>Description</p>
                <input type="text" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="commoninput">
                <p>Due Date</p>
                <input type="date" placeholder=""/>
              </div>
            </Col>
            <Col lg={12} className="text-center">
                <button className="addbutton">Add Entry</button>
            </Col>
          </Row>
        </form>
        <div className="todobody">
        <Row>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Col lg={12}>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="first">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Completed</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col lg={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
        </Tab.Container>
      </Row>

        </div>
      </div>
    </div>
  );
};

export default TodoBox;
