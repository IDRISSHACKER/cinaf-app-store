import React from 'react';
import {Provider} from "react-redux"
import store from "./redux/store"
import './App.css';
import {BrowserRouter as Router} from "react-router-dom"
import AppRouter from "./Router";
import "./sass/main.scss"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
