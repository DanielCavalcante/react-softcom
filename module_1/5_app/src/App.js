import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Props from './components/Props'
import DefaultProps from './components/DefaultProps'

function App() {
  return (
    <div className="App">
      <Hello />
      <Props nomeEmpresa="Softcom" />
      <DefaultProps nomeEmpresa="Softcom" />
    </div>
  );
}

export default App;
