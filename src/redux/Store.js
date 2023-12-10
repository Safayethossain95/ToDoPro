
import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Rootreducer } from './Reducers'

const store = configureStore({
  reducer: Rootreducer,
})

const Store = () => {
  return (
    <></>
  )
}

export {store}

export default Store