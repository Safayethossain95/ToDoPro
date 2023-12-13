import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO } from "./Action";

const initialState = {
  todos: [],
};

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from localStorage:", err);
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error("Error saving state to localStorage:", err);
  }
};

export const Rootreducer = (state = loadState() || initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newStateAdd = {
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
      saveState(newStateAdd);
      return newStateAdd;

    case REMOVE_TODO:
      const newStateRemove = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
      saveState(newStateRemove);
      return newStateRemove;

    case TOGGLE_TODO:
      const newStateToggle = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
      saveState(newStateToggle);
      return newStateToggle;

    case EDIT_TODO:
      const newStateEdit = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                title: action.payload.title,
                description: action.payload.description,
                dueDate: action.payload.dueDate,
              }
            : todo
        ),
      };
      saveState(newStateEdit);
      return newStateEdit;

    default:
      return state;
  }
};
