import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import { toast } from 'react-toastify';
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
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(groupReducer, intialState);

  const fetchGroups = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/groups`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });

      dispatch({
        type: FETCH_GROUPS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  const fetchGroup = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/groups?id=${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: FETCH_GROUP,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GROUP_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const createGroup = async (groupData) => {
    try {
      const { data } = await axios.post(`${apiUrl}/groups`, groupData, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: CREATE_GROUP,
        payload: data,
      });
      if (data) toast.success('Group created successfully');
      fetchGroups();
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  const updateGroup = async (id, groupData) => {
    try {
      const { data } = await axios.put(`${apiUrl}/groups?id=${id}`, groupData, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: UPDATE_GROUP,
        payload: data,
      });
      if (data) toast.success('Group updated successfully');
      fetchGroups();
    } catch (error) {
      console.log(error);
      if (error) toast.error('Error updating group');
      dispatch({
        type: GROUP_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const deleteGroup = async (id) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/groups?id=${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: DELETE_GROUP,
        payload: data,
      });
      if (data) toast.success('Group deleted successfully');
      fetchGroups();
    } catch (error) {
      console.log(error);
      if (error) toast.error('Error deleting group');
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data.error,
      // });
    }
  };

  const setGroupUpdateForm = async (data) => {
    try {
      dispatch({
        type: SET_GROUP_UPDATE_FORM,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: GROUP_ERROR,
      //   payload: error.response.data.error,
      // });
    }
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
