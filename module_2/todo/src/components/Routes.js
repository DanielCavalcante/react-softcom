import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import About from './template/About'

export default () => (
  <Router>
    <div>
      <nav class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link className='nav-link' to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact />
      <Route path="/about" component={About} />
    </div>
  </Router>
)