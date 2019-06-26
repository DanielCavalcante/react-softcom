import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css'

const title = 'React with Webpack and Babel in Softcom';

ReactDOM.render(
  <div className="title">{title}</div>,
  document.getElementById('app')
);

module.hot.accept();