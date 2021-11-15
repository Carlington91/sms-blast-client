import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import contactReducer from './contactReducer';

import {
  fetchDataList,
  fetchData,
  createData,
  updateData,
  deleteData,
} from '../../helpers/crud';

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
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(contactReducer, intialState);

  const createContact = async (contactData) => {
    await createData(
      `/contacts`,
      dispatch,
      contactData,
      CREATE_CONTACT,
      CONTACT_ERROR,
    );
  };

  const fetchContacts = async (groupId) =>
    await fetchDataList(
      `/contacts?group=${groupId}`,
      dispatch,
      FETCH_CONTACTS,
      CONTACT_ERROR,
    );

  const fetchContact = async (id) => {
    await fetchData(`/contacts/${id}`, dispatch, FETCH_CONTACT, CONTACT_ERROR);
  };

  const updateContact = async (id, contactData) => {
    await updateData(
      `/contacts?id=${id}`,
      dispatch,
      contactData,
      UPDATE_CONTACT,
      CONTACT_ERROR,
    );
    await fetchDataList();
  };

  const deleteContact = async (id) => {
    await deleteData(
      `/contacts?id=${id}`,
      dispatch,
      DELETE_CONTACT,
      CONTACT_ERROR,
    );
    await fetchDataList();
  };

  const createFromFileUpload = async (fileData) => {
    try {
      const { data } = await axios.post(
        `${apiUrl}/contacts/create-from-file-upload`,
        fileData,
        {
          headers: {
            ContentType: 'text/csv',
          },
        },
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
        success: state.success,
        error: state.error,
        createContact,
        fetchContacts,
        fetchContact,
        updateContact,
        deleteContact,
        createFromFileUpload,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};

export default ContactState;
