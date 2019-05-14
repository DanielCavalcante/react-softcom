import React from 'react'

export const Chield = props => 
  <div>
    <span>Chield: {props.name} {props.lastName}</span>
  </div>

export const Father = props =>
  <div>
    <span>Father: {props.name} {props.lastName}</span>
    {React.Children.map(props.children, c => React.cloneElement(c, {...props, ...c.props}))}
  </div>

export const GrandFather = props =>
  <div>
    <span>GrandFather: {props.name} {props.lastName}</span>
    <Father name='João' lastName={props.lastName}>
      <Chield name='Xuxinha' />
      <Chield name='Nena' />
    </Father>
    <Father {...props}></Father>
  </div>
