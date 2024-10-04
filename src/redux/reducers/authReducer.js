import jwtDecode from 'jwt-decode';
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

const initialState = {
  loading: false,
  error: null,
  user: null,
  token: localStorage.getItem('token') || '',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGNIN_TRY:
    case AUTH_SIGNUP_TRY:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_SIGNIN_SUCCESS:
    case AUTH_SIGNUP_SUCCESS:
    case USER_LOADED: {
      const token = action.payload;
      const user = jwtDecode(token);

      return {
        loading: false,
        error: null,
        token,
        user,
      };
    }

    case AUTH_SIGNIN_FAIL:
    case AUTH_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case AUTH_SIGNOUT:
      localStorage.removeItem('token');
      return {
        loading: false,
        error: null,
        user: null,
        token: null,
      };

    default:
      return state;
  }
};
