import {
  LOGIN,
  REGISTER,
  // LOGOUT,
  // FORGOT_PASSWORD,
  // RESET_PASSWORD,
  // AUTH_ERROR,
} from './authTypes';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { contact: payload.contact };
    case LOGIN:
      return { contacts: payload.contacts };
    // case FETCH_CONTACT:
    //   return { ...state, contact: payload.contact };
    // case UPDATE_CONTACT:
    //   return {
    //     ...state,
    //     contact: payload.contact,
    //     success: payload.success,
    //   };
    // case DELETE_CONTACT:
    //   return { ...state, success: payload.success };
    // case CONTACT_ERROR:
    //   return { ...state, error: payload };
    default:
      return state;
  }
};

export default authReducer;
