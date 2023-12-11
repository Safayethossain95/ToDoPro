import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useSelector } from 'react-redux';
const GenerateTodo = () => {
    const selectRootState = (state) => state.root;
    const { title, description, duedate } = useSelector(selectRootState);
    if (!title || !description || !duedate) {
        return <div>Loading...</div>; // or render a loading state
      }
  return (
    <>
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
    </>
  )
}

export default GenerateTodo