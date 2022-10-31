import React from 'react';
import {Provider} from "react-redux"
import store from "./redux/store"
import './App.css';
import './';
import {BrowserRouter as Router} from "react-router-dom"
import AppRouter from "./Router";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
   
  },
  typography: {
    fontFamily: [
      'Montserrat',
    ].join(','),
  },
});

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <div className="App">
            <AppRouter />
          </div>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
