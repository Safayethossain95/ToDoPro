import { ADD_TODO,REMOVE_TODO,TOGGLE_TODO } from "./Action";

const initialState = {
  todos: [],
};
  
export const Rootreducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
            description: action.payload.description,
            dueDate: action.payload.dueDate,
            completed: false,
          },
        ],
      };
      case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
      case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      default:
        return state;
    }
  };