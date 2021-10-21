import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import contactReducer from './contactReducer';

import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  CONTACT_ERROR,
} from './contactTypes';

export const contactContext = createContext();
export const useContact = () => useContext(contactContext);

const ContactState = ({ children }) => {
  const intialState = {
    contacts: [],
    contact: {},
    error: '',
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  const createContact = async (contactData) => {
    console.log(contactData);
    try {
      const { data } = await axios.post(`${apiUrl}/contacts`, contactData, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: CREATE_CONTACT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: CONTACT_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  const fetchContacts = async (groupId) => {
    try {
      let res;
      if (groupId)
        res = await axios.get(`${apiUrl}/contacts?group=${groupId}`, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

      dispatch({
        type: FETCH_CONTACTS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      // dispatch({
      //   type: CONTACT_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  const fetchContact = async (id) => {
    try {
      const { data } = await axios.get(`${apiUrl}/contacts?id=${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: FETCH_CONTACT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const editContact = async (id) => {
    try {
      const { data } = await axios.put(`${apiUrl}/contacts?id=${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: UPDATE_CONTACT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  const deleteContact = async (id) => {
    try {
      const { data } = await axios.delete(`${apiUrl}/contacts?id=${id}`, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: DELETE_CONTACT,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CONTACT_ERROR,
        payload: error.response.data.error,
      });
    }
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        error: state.error,
        createContact,
        fetchContacts,
        fetchContact,
        editContact,
        deleteContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactState;
