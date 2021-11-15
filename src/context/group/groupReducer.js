import {
  CREATE_GROUP,
  FETCH_GROUPS,
  FETCH_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP,
  GROUP_ERROR,
  SET_GROUP_UPDATE_FORM,
  CLEAR_GROUP_FORM,
} from './groupTypes';

const groupReducer = (state, { type, payload }) => {
  switch (type) {
    case CREATE_GROUP:
      return { ...state, msg: payload.msg };
    case FETCH_GROUP:
      return { ...state, group: payload.result };
    case FETCH_GROUPS:
      return { ...state, groups: payload.results };

    case UPDATE_GROUP:
      return { ...state, success: payload.success, msg: payload.msg };
    case DELETE_GROUP:
      return { ...state, success: payload.success, msg: payload.msg };
    case SET_GROUP_UPDATE_FORM: {
      return { ...state, group: payload };
    }
    case CLEAR_GROUP_FORM:
      return { ...state, group: '' };
    case GROUP_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default groupReducer;
