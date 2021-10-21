import { createContext, useContext, useReducer } from 'react';
import {
  fetchDataList,
  fetchData,
  createData,
  updateData,
  deleteData,
} from '../../helpers/crud';

import senderReducer from './senderReducer';
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

export const senderContext = createContext();
export const useSender = () => useContext(senderContext);

const SenderState = ({ children }) => {
  const intialState = {
    senders: [],
    sender: null,
    msg: '',
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(senderReducer, intialState);

  const fetchSenders = async () =>
    await fetchDataList(`/senders`, dispatch, FETCH_SENDERS, SENDER_ERROR);

  const fetchSender = (id) =>
    fetchData(`/senders?id=${id}`, dispatch, FETCH_SENDER, SENDER_ERROR);

  const createSender = async (senderData) => {
    await createData(
      `/senders`,
      dispatch,
      senderData,
      CREATE_SENDER,
      SENDER_ERROR,
    );
    fetchSenders();
  };

  const updateSender = async (id, senderData) => {
    await updateData(
      `/senders?id=${id}`,
      dispatch,
      senderData,
      UPDATE_SENDER,
      SENDER_ERROR,
    );
    fetchSenders();
  };

  const deleteSender = async (id) => {
    await deleteData(
      `/senders?id=${id}`,
      dispatch,
      DELETE_SENDER,
      SENDER_ERROR,
    );
    fetchSenders();
  };

  const setSenderUpdateForm = async (data) => {
    dispatch({
      type: SET_SENDER_UPDATE_FORM,
      payload: data,
    });
  };

  const clearSenderForm = async () => {
    dispatch({
      type: CLEAR_SENDER_FORM,
    });
  };

  return (
    <senderContext.Provider
      value={{
        senders: state.senders,
        sender: state.sender,
        msg: state.msg,
        success: state.success,
        error: state.error,
        createSender,
        fetchSenders,
        fetchSender,
        updateSender,
        deleteSender,
        setSenderUpdateForm,
        clearSenderForm,
      }}
    >
      {children}
    </senderContext.Provider>
  );
};

export default SenderState;
