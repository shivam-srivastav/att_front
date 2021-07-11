import { combineReducers } from "redux";
import attendence from "./AttendenceReducer";
import { connectRouter } from "connected-react-router";
import user from "./UserReducer";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    attendence,
    user,
  });

export default rootReducer;
