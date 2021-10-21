import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import { toast } from 'react-toastify';
import messageReducer from './messageReducer';
import {
  createData,
  fetchData,
  fetchDataList,
  updateData,
} from '../../helpers/crud';
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

export const messageContext = createContext();
export const useMessage = () => useContext(messageContext);

const MessageState = ({ children }) => {
  const intialState = {
    presetMessages: [],
    presetMessage: {},
    success: '',
    error: '',
    loading: true,
  };

  const [state, dispatch] = useReducer(messageReducer, intialState);

  const fetchPresetMessages = async () =>
    fetchDataList(
      `/messages/preset-messages`,
      dispatch,
      FETCH_PRESET_MESSAGES,
      PRESET_MESSAGE_ERROR,
    );

  const fetchPresetMessage = (id) => {
    fetchData(
      `/messages/preset-message?id=${id}`,
      dispatch,
      FETCH_PRESET_MESSAGE,
      PRESET_MESSAGE_ERROR,
    );
  };

  const createPresetMessage = async (messageData) => {
    await createData(
      `/messages/create-preset-message`,
      dispatch,
      messageData,
      CREATE_PRESET_MESSAGE,
      PRESET_MESSAGE_ERROR,
    );
    fetchPresetMessages();
  };

  const updatePresetMessage = async (id, presetMessageData) => {
    updateData(
      `/messages/preset-message?id=${id}`,
      dispatch,
      presetMessageData,
      UPDATE_PRESET_MESSAGE,
      PRESET_MESSAGE_ERROR,
    );
  };

  const deletePresetMessage = async (id) => {
    try {
      const { data } = await axios.delete(
        `${apiUrl}/messages/preset-message?id=${id}`,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

      dispatch({
        type: DELETE_PRESET_MESSAGE,
        payload: data,
      });
      if (data) toast.success('Group deleted successfully');
      fetchPresetMessages();
    } catch (error) {
      console.log(error);
      if (error) toast.error('Error deleting group');
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data.error,
      // });
    }
  };

  // const setGroupUpdateForm = async (data) => {
  //   try {
  //     dispatch({
  //       type: SET_GROUP_UPDATE_FORM,
  //       payload: data,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     // dispatch({
  //     //   type: GROUP_ERROR,
  //     //   payload: error.response.data.error,
  //     // });
  //   }
  // };

  // const clearGroupForm = async () => {
  //   dispatch({
  //     type: CLEAR_GROUP_FORM,
  //   });
  // };

  const sendGroupMessage = async (groupMessageData) => {
    await createData(
      `/messages/send-group-message`,
      dispatch,
      groupMessageData,
      SEND_GROUP_MESSAGE,
      GROUP_MESSAGE_ERROR,
    );
  };

  return (
    <messageContext.Provider
      value={{
        presetMessages: state.presetMessages,
        presetMessage: state.presetMessage,
        success: state.success,
        error: state.error,
        loading: state.loading,
        createPresetMessage,
        fetchPresetMessages,
        fetchPresetMessage,
        updatePresetMessage,
        deletePresetMessage,
        // fetchGroup,
        // updateGroup,
        // deleteGroup,
        // setGroupUpdateForm,
        // clearGroupForm,
        sendGroupMessage,
      }}
    >
      {children}
    </messageContext.Provider>
  );
};

export default MessageState;
