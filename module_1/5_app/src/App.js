import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello'
import Props from './components/Props'

function App() {
  return (
    <div className="App">
      <Hello />
      <Props nomeEmpresa="Softcom" />
    </div>
  );
}

export default App;
