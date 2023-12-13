import React,{useEffect, useState} from "react";
import "./TodoBox.scss";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import GenerateTodo from "../generateTodo/GenerateTodo";
import { addTodo, removeTodo } from "../../redux/Action";
import GenerateCompletedTodo from "../generateCompleted/GenerateCompletedTodo";
import ActiveTodos from './../activeTodos/ActiveTodos';
import { Modal, Button } from "react-bootstrap";
const TodoBox = () => {

  const [inputTitle,setInputTitle] = useState("")
  const [inputdescription,setDescription] = useState("")
  const [inputdueDate,setDueDate] = useState("")
  const [titleError,setTitleError] = useState("")
  const [descriptionError,setDescriptionError] = useState("")
  const [dueDateError,setDueDateError] = useState("")
 
  const dispatch = useDispatch();
  
 
  const handleAdd = (e) => {
    // Dispatch an action with a payload
    e.preventDefault()
    if (!inputTitle.trim()) {
      setTitleError('Please enter a title for your ToDo.');
      return;
    }

    if (!inputdueDate.trim()) {
      setDueDateError('Please enter a due date for your ToDo.');
      return;
    }

    if (!inputdescription.trim()) {
      setDescriptionError('Please enter a description for your ToDo.');
      return;
    }
    if(inputTitle && inputdueDate && inputdescription){
      dispatch(addTodo(inputTitle,inputdescription,inputdueDate));
      setInputTitle("")
      setDescription("")
      setDueDate("")
      setTitleError("")
      setDueDateError("")
      setDescriptionError("")
    }
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
                  placeholder={titleError?titleError:"What is the title of your ToDo?"}
                  style={titleError?{border:"1px solid red"}:{}}
                  value={inputTitle}
                  onChange={(e)=>setInputTitle(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={dueDateError?dueDateError:"What is the due date of your ToDo?"}
                  value={inputdueDate}
                  style={dueDateError?{border:"1px solid red"}:{}}
                  onChange={(e)=>setDueDate(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={descriptionError?descriptionError:"What is the description of your ToDo?"}
                  style={descriptionError?{border:"1px solid red"}:{}}
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
                    <Nav.Link eventKey="second">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Completed</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={12}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <GenerateTodo/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ActiveTodos/>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <GenerateCompletedTodo/>
                  </Tab.Pane>
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
