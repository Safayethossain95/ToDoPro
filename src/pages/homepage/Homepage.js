import React from 'react'
import './Homepage.scss'
import TodoBox from '../../components/todoBox/TodoBox'

const Homepage = () => {
  return (
    <>
        <div className="homepage">
            <TodoBox/>
        </div>
    </>
  )
}

export default Homepage