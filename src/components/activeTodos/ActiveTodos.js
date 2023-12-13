import React, { useState } from "react";
import "./ActiveTodos.scss";
import { Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { editTodo, removeTodo, toggleTodo } from "../../redux/Action";
import { useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
const ActiveTodos = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [certainDeleteId, setCertainDeleteId] = useState("");
  const [idtoEdit, setIdtoEdit] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputdescription, setDescription] = useState("");
  const [inputdueDate, setDueDate] = useState("");
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [dueDateError, setDueDateError] = useState("");
  const [certainTodo, setaCertaintodo] = useState([]);
  const [clickedTodoId1, setClickedTodoId1] = useState(null);
  const [clickedTodoId2, setClickedTodoId2] = useState(null);
  const handleClose = () => setShow(false);
  const handleRemoveTodo = () => {
    dispatch(removeTodo(certainDeleteId));
    setShow2(false);
  };
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

  const handleClose2 = () => setShow2(false);
  // Dispatch an action
  const handleShow2 = (id) => {
    setCertainDeleteId(id);
    setShow2(true);
  };
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleCompletedTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleShow = (todo) => {
    setShow(true);
    setIdtoEdit(todo.id);
    setaCertaintodo(todo);
  };

  const handleEdit = (e) => {
    // prevent the form from reloading the page
    e.preventDefault();

    // Dispatch an action with a payload
    dispatch(editTodo(idtoEdit, inputTitle, inputdescription, inputdueDate));
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
  todos.some(todo => todo.completed === false) ? (
    todos.map((todo, key) => {
      const isClicked1 = todo.id === clickedTodoId1
          const isClicked2 = todo.id === clickedTodoId2
      return todo.completed === false ? (
        <div
          className={
            todo.completed === false ? "contentdiv" : "contentdiv completed"
          }
          key={key}
        >
          <Row className="align-items-center">
            <Col
              lg={9}
              md={9}
              sm={9}
              xs={12}
              onClick={() => handleShow(todo)}
            >
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <span>{todo.dueDate}</span>
            </Col>
            <Col
              md={3}
              sm={3}
              xs={12}
              lg={3}
              className="d-flex mobilestyleoficons gap-2"
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
      ) : null;
    })
  ) : (
    <div className="contentdiv">
      <h2>No Active ToDo to show. Add some!</h2>
    </div>
  )
) : (
  <div className="contentdiv">
    <h2>No Active ToDo to show. Add some!</h2>
  </div>
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
                      : "What is the description of your ToDo?"
                  }
                  style={descriptionError ? { border: "1px solid red" } : {}}
                  value={inputdescription}
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

export default ActiveTodos;
