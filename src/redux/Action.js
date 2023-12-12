import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// Define action creator
export const addTodo = (title, description, dueDate) => ({
  type: ADD_TODO,
  payload: {
    id: uuidv4(),
    title,
    description,
    dueDate,
  },
});
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});