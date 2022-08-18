import React from 'react';
import {Provider} from "react-redux"
import store from "./redux/store"
import './App.css';
import Home from './screens/Home/Home';
import {BrowserRouter as Router} from "react-router-dom"
import Header from "./layouts/Header/Header"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Home />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
