import { replace } from "connected-react-router";
import * as TT from "../ActionTypes/ActionTypes";
import { login, getUser } from "../Apis/Apis";
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
      .then(async (res) => {
        console.log(res);
        await localStorage.setItem("token", res.token);
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
