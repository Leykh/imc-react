import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Input, Radio, Space } from 'antd';
import { useState } from 'react';
import ImcPanel from './imc-panel.js';

class App extends React.Component {
  
  constructor(props) {
  super(props); 
  this.state = {
      sexe: 0
     };
}
  
  message = (s) => {
    this.setState({sexe: s});
  }

  render(){

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bonjour la france</h1>
      </header>
    <div><Input placeholder="Basic usage"/></div>
    <div><ImcPanel value ={2} sexeFunction = {this.message}/></div>
    <div>Vous êtes un : {this.state.sexe}</div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}
}

export default App;
