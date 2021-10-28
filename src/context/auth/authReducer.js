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
      return { user: payload.user };
    case LOGIN:
      return {
        ...state,
        user: payload.user,
      };
    case LOGOUT:
      return { user: '' };
    case IS_LOGGED_IN:
      return { ...state, user: payload.user, loading: false };
    case AUTH_ERROR:
      return { error: payload };
    default:
      return state;
  }
};

export default authReducer;
