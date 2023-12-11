import React,{useEffect, useState} from "react";
import "./TodoBox.scss";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import GenerateTodo from "../generateTodo/GenerateTodo";

const TodoBox = () => {

  const [inputTitle,setInputTitle] = useState("")
  const [inputdescription,setDescription] = useState("")
  const [inputdueDate,setDueDate] = useState("")

  const dispatch = useDispatch();
  const SET_VARIABLE = 'SET_VARIABLE';
  // Dispatch an action
  const setVariableAction = (payload) => {
    dispatch({
      type: SET_VARIABLE,
      payload: payload,
    });
  };
  const handleAdd = (e) => {
    // Dispatch an action with a payload
    e.preventDefault()
    console.log(inputTitle,
      inputdescription,
      inputdueDate)
    setVariableAction({ title: inputTitle, description: inputdescription, duedate: inputdueDate});
  };

// Assuming your Redux state is stored in a slice called 'root'
// and your reducer is named Rootreducer



  
  
  

  return (
    <div className="todobox">
      <div className="formpart">
        <form>
          <h3 className="text-center">ToDo Pro</h3>
          <Row className="inputwrapper">
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder="What is the title of your ToDo?"
                  value={inputTitle}
                  onChange={(e)=>setInputTitle(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder="What is the due date of your ToDo?"
                  value={inputdueDate}
                  onChange={(e)=>setDueDate(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder="What is the description of your ToDo?"
                  value={inputdescription}
                  onChange={(e)=>setDescription(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={12} className="text-center">
              <button onClick={handleAdd} className="addbutton">Add Entry</button>
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
                  <Tab.Pane eventKey="first">
                    <GenerateTodo/>
                    {/* {
                      title&&description&&duedate?
                      <div className="contentdiv">
                      <Row className="align-items-center">
                        <Col lg={9}>
                          <h2>{title}</h2>
                          <p>
                            {description}
                          </p>
                          <span>{duedate}</span>
                        </Col>
                        <Col lg={3} className="d-flex gap-2">
                          <div>
                            <img src="./assets/images/delete.png" alt="" />
                          </div>
                          <div>
                            <img src="./assets/images/done.png" alt="" />
                          </div>
                        </Col>
                      </Row>
                    </div>
                      :""
                    } */}
                    
                    
                  </Tab.Pane>
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
