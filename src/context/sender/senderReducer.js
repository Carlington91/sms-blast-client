import {
  CREATE_SENDER,
  FETCH_SENDERS,
  FETCH_SENDER,
  UPDATE_SENDER,
  DELETE_SENDER,
  SENDER_ERROR,
  SET_SENDER_UPDATE_FORM,
  CLEAR_SENDER_FORM,
} from './senderTypes';

const sendersReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_SENDER:
      return { ...state, msg: payload.msg };
    case FETCH_SENDERS:
      return { senders: payload.results };
    case FETCH_SENDER:
      return { ...state, sender: payload.result };
    case UPDATE_SENDER:
      return { ...state, success: payload.success, msg: payload.msg };
    case DELETE_SENDER:
      return { ...state, success: payload.success, msg: payload.msg };
    case SET_SENDER_UPDATE_FORM: {
      return { ...state, sender: payload };
    }
    case CLEAR_SENDER_FORM:
      return { ...state, sender: '' };
    case SENDER_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default sendersReducer;
