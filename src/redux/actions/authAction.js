import axios from 'axios';
import {
  AUTH_SIGNUP_TRY,
  AUTH_SIGNUP_SUCCESS,
  AUTH_SIGNUP_FAIL,
  AUTH_SIGNIN_TRY,
  AUTH_SIGNIN_SUCCESS,
  AUTH_SIGNIN_FAIL,
  AUTH_SIGNOUT,
  USER_LOADED,
} from '../constants';
import { API_URL } from '../../apis/config';

export const signUp = (user) => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SIGNUP_TRY,
    });

    axios
      .post(`${API_URL}/signup`, user)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);

        dispatch({
          type: AUTH_SIGNUP_SUCCESS,
          payload: token,
        });
      })
      .catch((error) => {
        dispatch({
          type: AUTH_SIGNUP_FAIL,
          error,
        });
      });
  };
};

export const signIn = (creds) => {
  return (dispatch) => {
    dispatch({ type: AUTH_SIGNIN_TRY });

    axios
      .post(`${API_URL}/signin`, creds)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);

        dispatch({
          type: AUTH_SIGNIN_SUCCESS,
          payload: token,
        });
      })
      .catch((error) => {
        dispatch({
          type: AUTH_SIGNIN_FAIL,
          error,
        });
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: AUTH_SIGNOUT,
    });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    if (token) {
      dispatch({
        type: USER_LOADED,
        payload: token,
      });
    }
  };
};
