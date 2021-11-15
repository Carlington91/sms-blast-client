import { createContext, useContext, useReducer } from 'react';
import axios from 'axios';
import { apiUrl } from '../../config/apiUrl';
import authReducer from './authReducer';

import {
  LOGIN,
  REGISTER,
  LOGOUT,
  IS_LOGGED_IN,
  // FORGOT_PASSWORD,
  // RESET_PASSWORD,
  AUTH_ERROR,
} from './authTypes';
import { toast } from 'react-toastify';

export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthState = ({ children }) => {
  const intialState = {
    user: null,
    loading: true,
    isAuth: false,
    success: '',
    error: '',
  };

  const [state, dispatch] = useReducer(authReducer, intialState);

  const signUp = async (userData) => {
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
      //   type:  AUTH_ERROR,
      //   payload: error.response.data,
      // });
    }
  };

  const login = async (credentials, history) => {
    try {
      const { data } = await axios.post(`${apiUrl}/auth/login`, credentials, {
        headers: { 'Content-Type': 'application/json' },
      });

      dispatch({
        type: LOGIN,
        payload: data,
      });
      data && history.push('/dashboard');
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.message,
      });
      toast.error(error.response.data.message);
    }
  };

  const logout = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/auth/logout`, {
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

  const isLoggedIn = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/auth/loggedIn`);
      dispatch({
        type: IS_LOGGED_IN,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <authContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        success: state.success,
        error: state.error,
        isAuth: state.isAuth,
        signUp,
        login,
        logout,
        isLoggedIn,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthState;
