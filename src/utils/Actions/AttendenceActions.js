import { replace } from "connected-react-router";
import * as TT from "../ActionTypes/ActionTypes";
import { login, getUser, takeAttend, getAttend, register } from "../Apis/Apis";
import * as userAction from "./UserActions";
// import { store } from "../Store";
// const state = store.getState();
// const history = useHistory();
export const setloading = (data) => {
  return {
    type: TT.LOADING,
    data,
  };
};
export const login_user = (data) => {
  return (dispatch) => {
    login(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .then(() => getUser())
      .then((user) => {
        dispatch(userAction.set_user(user.data.user));
        console.log("Login Successful");
        dispatch(replace("./dashboard"));
      })
      .catch((err) => console.log(err));
  };
};
export const register_user = (data) => {
  return (dispatch) => {
    register(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
      })
      .then(() => getUser())
      .then((user) => {
        dispatch(userAction.set_user(user.data.user));
        console.log("Register Successful");
        dispatch(replace("./dashboard"));
      })
      .catch((err) => console.log(err));
  };
};
export const takeAttendence = (data) => {
  return (dispatch) => {
    takeAttend(data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};
export const showAttendence = (data) => {
  return (dispatch) => {
    getAttend(data)
      .then((res) => {
        console.log(res);
        // dispatch(show_att(res));
      })
      .catch((err) => console.log(err));
  };
};
export const show_att = (data) => ({
  type: TT.SHOW_ATT,
  data,
});
