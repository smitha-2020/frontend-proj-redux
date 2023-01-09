import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../src/css/main.css";
import { useAppSelector } from './hooks/reduxHook';
import { createTheme } from '@mui/material';

const container = document.getElementById('root')!;
const store = createStore();
const root = createRoot(container);
// let theme = React.useMemo(() => {
//   return createTheme(switchchange.modeChange ? dark : light);
// }, [switchchange]);
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
