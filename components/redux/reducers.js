// Action Types
const SET_DATE = "SET_DATE";

// Action Creators
export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

// Initial State
const initialState = {
  dueDate: new Date(),
};

// Reducer
export const endReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        dueDate: action.payload,
      };
    default:
      return state;
  }
};
