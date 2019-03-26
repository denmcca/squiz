import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setAuthToken from '../setAuthToken';
import jwt_decode from 'jwt-decode';

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
  axios
    .post("/users/login", user)
    .then(res => {
      console.log(res);
      const {token} = res;
      localStorage.setItem('jwtToken',token);
      setAuthToken(token);
      const decoded= jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      console.log("Could not log in");
    });
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}