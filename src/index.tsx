import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from './redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../src/css/main.css";


import { createTheme, ThemeProvider } from '@mui/material'
const theme = createTheme({
  palette: {
    mode:'light'
    // primary: {
    //   // light: will be calculated from palette.primary.main,
    //   main: '#d6cbd3',
    //   contrastText: 'white',
    //   // dark: will be calculated from palette.primary.main,
    //   // contrastText: will be calculated to contrast with palette.primary.main
    // },
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00',
    // }
  }
})
const container = document.getElementById('root')!;
const store = createStore();
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
