import { createContext, useContext, useReducer } from 'react';
import {
  fetchDataList,
  fetchData,
  createData,
  updateData,
  deleteData,
} from '../../helpers/crud';

import groupReducer from './groupReducer';
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

export const groupContext = createContext();
export const useGroup = () => useContext(groupContext);

const GroupState = ({ children }) => {
  const intialState = {
    groups: [],
    group: {},
    msg: '',
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(groupReducer, intialState);

  const fetchGroups = async () =>
    await fetchDataList(`/groups`, dispatch, FETCH_GROUPS, GROUP_ERROR);

  const fetchGroup = (id) =>
    fetchData(`/groups?id=${id}`, dispatch, FETCH_GROUP, GROUP_ERROR);

  const createGroup = async (groupData) => {
    await createData(`/groups`, dispatch, groupData, CREATE_GROUP, GROUP_ERROR);
    fetchGroups();
  };

  const updateGroup = async (id, groupData) => {
    await updateData(
      `/groups?id=${id}`,
      dispatch,
      groupData,
      UPDATE_GROUP,
      GROUP_ERROR,
    );
    fetchGroups();
  };

  const deleteGroup = async (id) => {
    await deleteData(`/groups?id=${id}`, dispatch, DELETE_GROUP, GROUP_ERROR);
    fetchGroups();
  };

  const setGroupUpdateForm = async (data) => {
    dispatch({
      type: SET_GROUP_UPDATE_FORM,
      payload: data,
    });
  };

  const clearGroupForm = async () => {
    dispatch({
      type: CLEAR_GROUP_FORM,
    });
  };

  return (
    <groupContext.Provider
      value={{
        groups: state.groups,
        group: state.group,
        msg: state.msg,
        success: state.success,
        error: state.error,
        createGroup,
        fetchGroups,
        fetchGroup,
        updateGroup,
        deleteGroup,
        setGroupUpdateForm,
        clearGroupForm,
      }}
    >
      {children}
    </groupContext.Provider>
  );
};

export default GroupState;
