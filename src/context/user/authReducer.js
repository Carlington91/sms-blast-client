import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
} from './contactTypes';

const contactReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_CONTACT:
      return { contact: payload.contact };
    case FETCH_CONTACTS:
      return { contacts: payload.contacts };
    case FETCH_CONTACT:
      return { ...state, contact: payload.contact };
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: payload.contact,
        success: payload.success,
      };
    case DELETE_CONTACT:
      return { ...state, success: payload.success };
    case CONTACT_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default contactReducer;
