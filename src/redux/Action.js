export const SET_VARIABLE = 'SET_VARIABLE';

// Define action creator
export const setVariable = (value) => ({
  type: SET_VARIABLE,
  payload: value,
});