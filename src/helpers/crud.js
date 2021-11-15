import axios from 'axios';
import { toast } from 'react-toastify';
import { apiUrl } from '../config/apiUrl';

export const fetchDataList = async (endpoint, dispatch, type, errorType) => {
  try {
    const { data } = await axios.get(`${apiUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (data) {
      dispatch({
        type,
        payload: data,
      });
      return;
    }
  } catch (error) {
    if (error) {
      console.log(error);
      // dispatch({
      //   type: errorType,
      //   payload: error,
      // });
    }
  }
};

export const fetchData = async (endpoint, dispatch, type, errorType) => {
  try {
    const { data } = await axios.get(`${apiUrl}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch({
      type,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: errorType,
      payload: error.response.data.error,
    });
  }
};

export const createData = async (
  endpoint,
  dispatch,
  itemData,
  type,
  errorType,
) => {
  try {
    const { data } = await axios.post(`${apiUrl}${endpoint}`, itemData, {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch({
      type,
      payload: data,
    });
    if (data) {
      toast.success(data.msg);
      return;
    }
  } catch (error) {
    console.log(error.response.data.error.message);

    dispatch({
      type: errorType,
      payload: error.response.data.error.message,
    });
    toast.error(error.response.data.error.message);
  }
};

export const updateData = async (
  endpoint,
  dispatch,
  itemData,
  type,
  errorType,
) => {
  try {
    const { data } = await axios.put(`${apiUrl}${endpoint}`, itemData, {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch({
      type,
      payload: data,
    });
    if (data) toast.success(data.msg);
  } catch (error) {
    console.log(error);
    if (error) toast.error('Error updating group');
    dispatch({
      type: errorType,
      payload: error.response.data.error,
    });
  }
};

export const deleteData = async (endpoint, dispatch, type, typeError) => {
  try {
    const { data } = await axios.delete(`${apiUrl}${endpoint}`, {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch({
      type,
      payload: data,
    });
    if (data) toast.success(data.msg);
  } catch (error) {
    console.log(error);
    if (error) toast.error('Error deleting group');
    // dispatch({
    //   type: typeError,
    //   payload: error.response.data.error,
    // });
  }
};
