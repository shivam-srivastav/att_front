import * as TT from "../ActionTypes/ActionTypes";

export const set_user = (data) => {
  return { type: TT.SET_USER, data };
};
