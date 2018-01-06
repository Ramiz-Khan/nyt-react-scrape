import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Articles from './components/articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Articles />
      </div>
    );
  }
}

export default App;
