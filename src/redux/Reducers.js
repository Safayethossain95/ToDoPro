import { SET_VARIABLE } from "./Action";

const initialState = {
    variable: 20,
  };
  
export const Rootreducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_VARIABLE:
        return {
          ...state,
        //   variable: action.payload + state,
          variable: state.variable+1,
        };
      default:
        return state;
    }
  };