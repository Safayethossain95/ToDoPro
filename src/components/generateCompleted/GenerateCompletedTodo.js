import React from 'react'
import './GenerateCompletedTodo.scss'

import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { removeTodo } from '../../redux/Action';
import { useDispatch } from 'react-redux';
const GenerateCompletedTodo = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const handleRemoveTodo = (id) => {
      dispatch(removeTodo(id));
    };
  return (
    <>
{
      todos.map((todo,key)=>{
        return todo.completed==true &&(
        <div className="contentdiv" key={key}>
                      <Row className="align-items-center">
                        <Col lg={9}>
                          <h2>{todo.title}</h2>
                          <p>
                            {todo.description}
                          </p>
                          <span>{todo.dueDate}</span>
                        </Col>
                        <Col lg={3} className="d-flex justify-content-end gap-2">
                          <div onClick={()=>handleRemoveTodo(todo.id)}>
                            <img src="./assets/images/delete.png" alt="" />
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

export default GenerateCompletedTodo