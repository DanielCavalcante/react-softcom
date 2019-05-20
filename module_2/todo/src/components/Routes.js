import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Todo from './todo/Todo'
import About from './template/About'

export default () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact component={Todo} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)