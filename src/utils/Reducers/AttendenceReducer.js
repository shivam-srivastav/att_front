import * as TT from "../ActionTypes/ActionTypes";

const intialState = {
  loading: false,
  att_list: ["shivam", "vikas", "riya"],
};

const TaskReducer = (state = intialState, actions) => {
  switch (actions.type) {
    case TT.LOADING:
      return {
        ...state,
        loading: actions.data,
      };
    case TT.SHOW_ATT:
      return {
        ...state,
        att_list: actions.data,
      };
    default:
      return {
        ...state,
      };
  }
};
export default TaskReducer;
