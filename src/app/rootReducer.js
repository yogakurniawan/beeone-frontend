import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

console.log(rootReducer);

export default (state, action) => {
  if (action.type === 'RESET') {
    state = undefined;
  }

  return rootReducer(state, action);
};
