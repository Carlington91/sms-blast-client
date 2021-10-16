import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import { toast } from 'react-toastify';
import messageReducer from './messageReducer';
import { SEND_GROUP_MESSAGE } from './messageTypes';

export const messageContext = createContext();
export const useMessage = () => useContext(messageContext);

const MessageState = ({ children }) => {
  const intialState = {
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(messageReducer, intialState);

  // const createGroup = async (groupData) => {
  //   try {
  //     const { data } = await axios.post(`${apiUrl}/groups`, groupData, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     dispatch({
  //       type: CREATE_GROUP,
  //       payload: data,
  //     });
  //     if (data) toast.success('Group created successfully');
  //     fetchGroups();
  //   } catch (error) {
  //     console.log(error);
  //     // dispatch({
  //     //   type: GROUP_ERROR,
  //     //   payload: error.response.data,
  //     // });
  //   }
  // };

  // const updateGroup = async (id, groupData) => {
  //   try {
  //     const { data } = await axios.put(`${apiUrl}/groups?id=${id}`, groupData, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     dispatch({
  //       type: UPDATE_GROUP,
  //       payload: data,
  //     });
  //     if (data) toast.success('Group updated successfully');
  //     fetchGroups();
  //   } catch (error) {
  //     console.log(error);
  //     if (error) toast.error('Error updating group');
  //     dispatch({
  //       type: GROUP_ERROR,
  //       payload: error.response.data.error,
  //     });
  //   }
  // };

  // const deleteGroup = async (id) => {
  //   try {
  //     const { data } = await axios.delete(`${apiUrl}/groups?id=${id}`, {
  //       headers: { 'Content-Type': 'application/json' },
  //     });

  //     dispatch({
  //       type: DELETE_GROUP,
  //       payload: data,
  //     });
  //     if (data) toast.success('Group deleted successfully');
  //     fetchGroups();
  //   } catch (error) {
  //     console.log(error);
  //     if (error) toast.error('Error deleting group');
  //     // dispatch({
  //     //   type: GROUP_ERROR,
  //     //   payload: error.response.data.error,
  //     // });
  //   }
  // };

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
    console.log('groupMessage: ', groupMessageData);
    try {
      const { data } = await axios.post(
        `${apiUrl}/group-message`,
        groupMessageData,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );

      dispatch({
        type: SEND_GROUP_MESSAGE,
        payload: data,
      });
      if (data) toast.success(data.message);
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  return (
    <messageContext.Provider
      value={{
        // groups: state.groups,
        // group: state.group,
        success: state.success,
        error: state.error,
        // createGroup,
        // fetchGroups,
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
