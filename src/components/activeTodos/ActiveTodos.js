import React from 'react'
import './ActiveTodos.scss'
import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from '../../redux/Action';
import { useDispatch } from 'react-redux';
const ActiveTodos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };
    const handleCompletedTodo = (id) => {
        dispatch(toggleTodo(id));
      };
  return (
    <>
    {
        todos.map((todo,key)=>{
          return todo.completed==false &&(
          <div className="contentdiv" key={key}>
                        <Row className="align-items-center">
                          <Col lg={9}>
                            <h2>{todo.title}</h2>
                            <p>
                              {todo.description}
                            </p>
                            <span>{todo.dueDate}</span>
                          </Col>
                          <Col lg={3} className="d-flex gap-2">
                          <div onClick={()=>handleRemoveTodo(todo.id)}>
                            <img src="./assets/images/delete.png" alt="" />
                          </div>
                          <div onClick={()=>handleCompletedTodo(todo.id)}>
                            <img src="./assets/images/done.png" alt="" />
                          </div>
                        </Col>
                        </Row>
                      </div>
  
          )
        })
      }
    </>
  )
}

export default ActiveTodos