import axios from "axios";
import { GET_ERRORS } from "./types";

export const registerUser = (user, history) => dispatch => {
  console.log(JSON.stringify(user));
  axios
    .post("/users/register", user, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const loginUser = user => dispatch => {
  console.log("we doin this");
  axios
    .post("/users/login", user)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
