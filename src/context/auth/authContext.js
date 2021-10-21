import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import authReducer from './authReducer';

import {
  LOGIN,
  REGISTER,
  LOGOUT,
  // FORGOT_PASSWORD,
  // RESET_PASSWORD,
  // AUTH_ERROR,
} from './authTypes';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthState = ({ children }) => {
  const intialState = {
    user: null,
    error: '',
  };

  const [state, dispatch] = useReducer(authReducer, intialState);

  const signUp = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(`${apiUrl}/auth/register`, userData, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: REGISTER,
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

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(`${apiUrl}/login`, credentials, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: LOGIN,
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

  const logout = async (userData) => {
    console.log(userData);
    try {
      const { data } = await axios.post(`${apiUrl}/contacts`, userData, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: LOGOUT,
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

  return (
    <authContext.Provider
      value={{
        user: state.user,
        error: state.error,
        signUp,
        login,
        logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
