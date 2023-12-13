import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./GenerateTodo.scss";
import { editTodo, removeTodo, toggleTodo } from "../../redux/Action";
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
const GenerateTodo = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [idtoEdit, setIdtoEdit] = useState("");
  const [certainTodo, setaCertaintodo] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputdescription, setDescription] = useState("");
  const [inputdueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dueDateError, setDueDateError] = useState("");
  const todos = useSelector((state) => state.todos);
  const [certainDeleteId, setCertainDeleteId] = useState("");
  const [clickedTodoId1, setClickedTodoId1] = useState(null);
  const [clickedTodoId2, setClickedTodoId2] = useState(null);
  const dispatch = useDispatch();
  const handleClickBounce1 = (myid) => {
    setClickedTodoId1(myid);
    // Reset the id
    setTimeout(() => {
      setClickedTodoId1(null);
    }, 300);
  };
  const handleClickBounce2 = (myid) => {
    setClickedTodoId2(myid);
    // Reset the id
    setTimeout(() => {
      setClickedTodoId2(null);
    }, 300);
  };

 
  
  const handleRemoveTodo = () => {
    dispatch(removeTodo(certainDeleteId));
    setShow2(false);
  };
  const handleCompletedTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = (todo) => {
    setShow(true);
    setIdtoEdit(todo.id);
    setaCertaintodo(todo);
  };
  const handleShow2 = (id) => {
    setCertainDeleteId(id);
    setShow2(true);
  };

  const handleEdit = (e) => {
    // Dispatch an action with a payload
    e.preventDefault();
    dispatch(
      editTodo(
        idtoEdit,
        inputTitle ? inputTitle : certainTodo.title,
        inputdescription ? inputdescription : certainTodo.description,
        inputdueDate ? inputdueDate : certainTodo.dueDate
      )
    );
    setInputTitle("");
    setDescription("");
    setDueDate("");
    setTitleError("");
    setDueDateError("");
    setDescriptionError("");
    setShow(false);
  };
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo, key) => {
          const isClicked1 = todo.id === clickedTodoId1
          const isClicked2 = todo.id === clickedTodoId2
          return (
            <div
              className={
                todo.completed == false ? "contentdiv" : "contentdiv completed"
              }
              key={key}
            >
              <Row className="align-items-center">
                <Col
                  onClick={() => handleShow(todo)}
                  lg={9}
                  md={9}
                  sm={9}
                  xs={12}
                >
                  <h2>{todo.title}</h2>
                  <p>{todo.description}</p>
                  <span>{todo.dueDate}</span>
                </Col>
                <Col
                  lg={3}
                  md={3}
                  sm={3}
                  xs={12}
                  className="mobilestyleoficons d-flex gap-2"
                >
                  <div onClick={() => handleShow2(todo.id)}>
                    <img
                      onClick={()=>handleClickBounce1(todo.id)}
                      style={{ transform: isClicked1 ? 'scale(1.1)' : 'scale(1)' }}
                      src="./assets/images/delete.png"
                      alt=""
                    />
                  </div>
                  <div onClick={() => handleCompletedTodo(todo.id)}>
                    <img
                      onClick={()=>handleClickBounce2(todo.id)}
                      style={{ transform: isClicked2 ? 'scale(1.1)' : 'scale(1)' }}
                      src="./assets/images/done.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </div>
          );
        })
      ) : (
        <>
          <div className="contentdiv">
            <h2>No ToDo to show. Add some!</h2>
          </div>
        </>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="inputwrapper">
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={titleError ? titleError : certainTodo.title}
                  style={titleError ? { border: "1px solid red" } : {}}
                  value={inputTitle ? inputTitle : certainTodo.title}
                  onChange={(e) => setInputTitle(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={
                    dueDateError ? dueDateError : certainTodo.dueDate
                  }
                  value={inputdueDate ? inputdueDate : certainTodo.dueDate}
                  style={dueDateError ? { border: "1px solid red" } : {}}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={12}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={
                    descriptionError
                      ? descriptionError
                      : certainTodo.description
                  }
                  style={descriptionError ? { border: "1px solid red" } : {}}
                  value={
                    inputdescription
                      ? inputdescription
                      : certainTodo.description
                  }
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={12} className="text-center">
              <button onClick={handleEdit} className="addbutton">
                Add Entry
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
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

export default GenerateTodo;
