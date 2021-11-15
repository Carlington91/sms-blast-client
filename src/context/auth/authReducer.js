import {
  LOGIN,
  REGISTER,
  IS_LOGGED_IN,
  LOGOUT,
  // FORGOT_PASSWORD,
  // RESET_PASSWORD,
  AUTH_ERROR,
} from './authTypes';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { user: payload.user, isAuth: false };
    case LOGIN:
      return {user: payload.user,isAuth: true};
    case LOGOUT:
      return { user: '', isAuth: false };
    case IS_LOGGED_IN:
      return {  user: payload.user,isAuth:true, loading: false };
    case AUTH_ERROR:
      return { error: payload, isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
