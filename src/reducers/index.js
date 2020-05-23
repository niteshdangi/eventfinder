import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import userReducer from "./userReducer";

export default combineReducers({
  myevent: eventReducer,
  auth: userReducer,
});
