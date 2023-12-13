import React, { useState } from "react";
import "./GenerateCompletedTodo.scss";
import { Modal, Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { removeTodo } from "../../redux/Action";
import { useDispatch } from "react-redux";
const GenerateCompletedTodo = () => {
  const [show2, setShow2] = useState(false);
  const [certainDeleteId, setCertainDeleteId] = useState("");
  const [clickedTodoId1, setClickedTodoId1] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(certainDeleteId));
    setShow2(false);
  };
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (id) => {
    setCertainDeleteId(id);
    setShow2(true);
  };
  const handleClickBounce1 = (myid) => {
    setClickedTodoId1(myid);
    // Reset the id
    setTimeout(() => {
      setClickedTodoId1(null);
    }, 300);
  };
 
  return (
    <>
      {todos.length > 0 ? (
  todos.some(todo => todo.completed === true) ? (
    todos.map((todo, key) => {
      const isClicked1 = todo.id === clickedTodoId1
      return (
        todo.completed === true ? (
          <div className="contentdiv completed" key={key}>
            <Row className="align-items-center">
              <Col lg={9}>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
                <span>{todo.dueDate}</span>
              </Col>
              <Col lg={3} className="d-flex justify-content-end gap-2">
                <div onClick={() => handleShow2(todo.id)}>
                  <img
                   onClick={()=>handleClickBounce1(todo.id)}
                    style={{ transform: isClicked1 ? 'scale(1.1)' : 'scale(1)' }}
                    src="./assets/images/delete.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </div>
        ) : null
      );
    })
  ) : (
    <div className="contentdiv">
      <h2>No Completed ToDo to show</h2>
    </div>
  )
) : (
  <div className="contentdiv">
    <h2>No Completed ToDo to show</h2>
  </div>
)}

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Delete this todo? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRemoveTodo}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GenerateCompletedTodo;
