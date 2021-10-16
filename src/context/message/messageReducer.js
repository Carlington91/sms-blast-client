import { SEND_GROUP_MESSAGE } from './messageTypes';

const groupReducer = (state, { type, payload }) => {
  switch (type) {
    case SEND_GROUP_MESSAGE:
      return { ...state, success: payload.success };

    default:
      return state;
  }
};

export default groupReducer;
