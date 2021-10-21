import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GroupState from './context/group/groupContext';
import ContactState from './context/contact/contactContext';
import MessageState from './context/message/messageContext';
import SenderState from './context/sender/senderContext';
import AuthState from './context/auth/authContext';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthState>
        <BrowserRouter>
          <GroupState>
            <SenderState>
              <MessageState>
                <ContactState>
                  <ToastContainer />
                  <App />
                </ContactState>
              </MessageState>
            </SenderState>
          </GroupState>
        </BrowserRouter>
      </AuthState>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
