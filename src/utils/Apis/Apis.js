import { server_url } from "../../config";

const api = "/api/v1";
const callAPI = async function (method, url, data = {}) {
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: "Bearer " + localStorage.getItem("token"),
    },
  };

  if (method !== "get") {
    options.body = JSON.stringify(data);
  }
  return fetch(server_url + url, options).then((res) => res.json());
};
export const login = (data) => callAPI("post", `${api}/login`, data);
export const register = (data) => callAPI("post", `${api}/register`, data);
export const getUser = (data = {}) => callAPI("get", `${api}/getuser`, data);
export const takeAttend = (data = {}) =>
  callAPI("post", `${api}/takeAttend`, data);
export const getAttend = (data = {}) =>
  callAPI("post", `${api}/getAttend`, data);
export const addingTask = (data) =>
  callAPI("post", "/task/lead_6996a7dcdddc4af3b4f71ccb985cea38", data);
export const getAllTask = (data = {}) =>
  callAPI("get", "/task/lead_6996a7dcdddc4af3b4f71ccb985cea38", data);
export const getSingleTask = (data = {}) =>
  callAPI("get", `/task/lead_6996a7dcdddc4af3b4f71ccb985cea38/${data}`, data);
export const updateTask = (data = {}) =>
  callAPI("put", `/task/${data.lead_id}/${data.task_id}`, data.req);
export const deleteTask = (data = {}) =>
  callAPI("delete", `/task/${data.lead_id}/${data.task_id}`, data);
export const assignedUser = (data = {}) => callAPI("get", "/team", data);
