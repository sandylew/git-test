import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import 'typeface-open-sans';
import 'typeface-roboto';
import 'typeface-lily-script-one';
import SearchBar from './components/SearchPage'
import './App.css';

class App extends Component {

  render() {
      return (
        <BrowserRouter>
          <div className="App">
          <SearchBar />
          <Main />
          </div>
          </BrowserRouter>
      );
  }
}

export default App;