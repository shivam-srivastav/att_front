import * as TT from "../ActionTypes/ActionTypes";

const intialState = {
  loading: false,
};

const TaskReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case TT.LOADING:
      return {
        ...state,
        loading: actions.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default TaskReducer;
