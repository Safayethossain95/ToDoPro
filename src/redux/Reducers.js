import { SET_VARIABLE } from "./Action";

const initialState = {
    title: "",
    description:"",
    duedate:""
  };
  
export const Rootreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VARIABLE:
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  };