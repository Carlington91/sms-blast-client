import {
  CREATE_PRESET_MESSAGE,
  FETCH_PRESET_MESSAGES,
  FETCH_PRESET_MESSAGE,
  UPDATE_PRESET_MESSAGE,
  DELETE_PRESET_MESSAGE,
  PRESET_MESSAGE_ERROR,
  SEND_GROUP_MESSAGE,
  GROUP_MESSAGE_ERROR,
} from './messageTypes';

const messageReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_PRESET_MESSAGE:
      return { ...state, success: payload.success, loading: false };
    case FETCH_PRESET_MESSAGES:
      return {
        ...state,
        presetMessages: payload.results,
        loading: false,
      };
    case FETCH_PRESET_MESSAGE:
      return {
        ...state,
        presetMessage: payload.result,
        loading: false,
      };
    case UPDATE_PRESET_MESSAGE:
      return {
        ...state,
        success: payload.success,
        loading: false,
      };
    case DELETE_PRESET_MESSAGE:
      return {
        ...state,
        success: payload.success,
        loading: false,
      };
    case SEND_GROUP_MESSAGE:
      return { ...state, success: payload.success, loading: false };

    case PRESET_MESSAGE_ERROR:
    case GROUP_MESSAGE_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
};

export default messageReducer;
