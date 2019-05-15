import React from 'react';
import './App.css';

import Hello from './components/Hello'
import Props from './components/Props'
import DefaultProps from './components/DefaultProps'
import Count from './components/Count'
import { GrandFather } from './components/GrandFather'
import Square from './components/Square'
import Button from './components/Children'
import ChildrenComposto from './components/ChildrenComposto'
import Stateless from './components/Stateless'

function App() {
  return (
    <div className="App">
      <Hello />
      <Props nomeEmpresa="Softcom" />
      <DefaultProps nomeEmpresa="Softcom" />
      <Count />
      <GrandFather name='Ronaldo' lastName='Nazario' />
        {['blue', 'yellow', 'black', 'green'].map((square) => (
          <Square color={square} key={square} />
        ))}
      <Button>Varei</Button>
      <ChildrenComposto />
      <Stateless />
    </div>
  );
}

export default App;
