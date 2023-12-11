export const SET_VARIABLE = 'SET_VARIABLE';

// Define action creator
export const setVariable = ({title,description,duedate}) => ({
  type: SET_VARIABLE,
  payload: {title,description,duedate},
});