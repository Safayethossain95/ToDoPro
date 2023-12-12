import React,{useState} from 'react'
import './ActiveTodos.scss'
import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { editTodo, removeTodo, toggleTodo } from '../../redux/Action';
import { useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
const ActiveTodos = () => {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);  

  const handleClickBounce1 = () => {
    setIsClicked1(!isClicked1);
    // Reset the scale to 1 after 0.3 seconds
    setTimeout(() => {
      setIsClicked1(false);
    }, 300);
  };
  const handleClickBounce2 = () => {
    setIsClicked2(!isClicked2);
    // Reset the scale to 1 after 0.3 seconds
    setTimeout(() => {
      setIsClicked2(false);
    }, 300);
  };

  const scaleValue = isClicked1 ? 0.9 : 1;
  const scaleValue2 = isClicked2 ? 0.9 : 1;

  const elementStyle1 = {
    transform: `scale(${scaleValue})`,
    transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
    cursor: 'pointer',
  };
  const elementStyle2 = {
    transform: `scale(${scaleValue2})`,
    transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
    cursor: 'pointer',
  };
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };
    const handleCompletedTodo = (id) => {
        dispatch(toggleTodo(id));
      };
      const [show, setShow] = useState(false);
  const [idtoEdit,setIdtoEdit] = useState("")
  const handleClose = () => setShow(false);
  const [inputTitle,setInputTitle] = useState("")
  const [inputdescription,setDescription] = useState("")
  const [inputdueDate,setDueDate] = useState("")
  const [titleError,setTitleError] = useState("")
  const [descriptionError,setDescriptionError] = useState("")
  const [dueDateError,setDueDateError] = useState("")
  const [certainTodo,setaCertaintodo] = useState([])
  const handleShow = (todo) => {
    setShow(true)
    setIdtoEdit(todo.id)
    setaCertaintodo(todo)
  };

 

  const handleEdit = (e) => {
    // prevent the form from reloading the page
    e.preventDefault()
    
    // Dispatch an action with a payload
      dispatch(editTodo(idtoEdit,inputTitle,inputdescription,inputdueDate));
      setInputTitle("")
      setDescription("")
      setDueDate("")
      setTitleError("")
      setDueDateError("")
      setDescriptionError("")
      setShow(false)
    
  };
      
  return (
    <>
    {
        todos.map((todo,key)=>{
          return todo.completed==false &&(
          <div  className={todo.completed==false?"contentdiv":"contentdiv completed"} key={key}>
                        <Row className="align-items-center">
                          <Col lg={9} md={9} sm={9} xs={12} onClick={() => handleShow(todo)}>
                            <h2>{todo.title}</h2>
                            <p>
                              {todo.description}
                            </p>
                            <span>{todo.dueDate}</span>
                          </Col>
                          <Col md={3} sm={3} xs={12} lg={3} className="d-flex mobilestyleoficons gap-2">
                          <div onClick={()=>handleRemoveTodo(todo.id)}>
                            <img onClick={handleClickBounce1} style={elementStyle1} src="./assets/images/delete.png" alt="" />
                          </div>
                          <div onClick={()=>handleCompletedTodo(todo.id)}>
                            <img onClick={handleClickBounce2} style={elementStyle2}  src="./assets/images/done.png" alt="" />
                          </div>
                        </Col>
                        </Row>
                      </div>
  
          )
        })
      }
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
                  placeholder={titleError?titleError:certainTodo.title}
                  style={titleError?{border:"1px solid red"}:{}}
                  value={inputTitle?inputTitle:certainTodo.title}
                  onChange={(e)=>setInputTitle(e.target.value)}
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="commoninput">
                <input
                  type="text"
                  placeholder={dueDateError?dueDateError:certainTodo.dueDate}
                  value={inputdueDate?inputdueDate:certainTodo.dueDate}
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
              <button onClick={handleEdit} className="addbutton">Add Entry</button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ActiveTodos