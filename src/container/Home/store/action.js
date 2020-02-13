import axios from "axios";

export function getList() {
  return dispatch => {
    return axios.get("http://39.105.148.23:8000/").then(res => {
      dispatch({
        type: "changeList",
        payload: res.data.data
      });
    });
  };
}
