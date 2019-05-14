import React from 'react';
import './App.css';

import Hello from './components/Hello'
import Props from './components/Props'
import DefaultProps from './components/DefaultProps'
import Count from './components/Count'

function App() {
  return (
    <div className="App">
      <Hello />
      <Props nomeEmpresa="Softcom" />
      <DefaultProps nomeEmpresa="Softcom" />
      <Count />
    </div>
  );
}

export default App;
