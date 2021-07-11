import * as TT from "../ActionTypes/ActionTypes";

const intialState = {};

const UserReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case TT.SET_USER:
      return {
        ...state,
        ...actions.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default UserReducer;
