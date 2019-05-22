import React, { Component } from 'react'
import axios from 'axios'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import '../../stylesheets/list.css'

const API = 'https://node-todo-dev.herokuapp.com/api/todos'

export default class Todo extends Component {
  
  constructor(props) {
    super(props);
    this.state = { description: '', todos: []};
    this.handleChange = this.handleChange;
    this.handleSearch = this.handleSearch;
    this.handleAdd = this.handleAdd;
    this.handleRemove = this.handleRemove;
    this.handleMarkAsDone = this.handleMarkAsDone;
    this.handleMarkAsPending = this.handleMarkAsPending;

    this.refresh();
  }

  refresh = (description = '') => {
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${API}?sort=-createdAt${search}`).then(res => {
      this.setState({...this.state, description, todos: res.data});
    });
  }

  handleSearch = () => {
    this.refresh(this.state.description);
  }

  handleChange = (e) => {
    this.setState({...this.state, description: e.target.value})
  }

  handleAdd = () => {
    const description = this.state.description;
    axios.post(API, { description }).then(res => {
      this.refresh();
    })
  }

  handleRemove = (todo) => {
    axios.delete(`${API}/${todo._id}`).then(res => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsDone = (todo) => {
    axios.put(`${API}/${todo._id}`, {...todo, done: true}).then(res => {
      this.refresh(this.state.description);
    });
  }

  handleMarkAsPending = (todo) => {
    axios.put(`${API}/${todo._id}`, {...todo, done: false}).then(res => {
      this.refresh(this.state.description);
    });
  }

  render() {
    return (
      <div>
      <h2 className='title'>Add Todo</h2>
      <TodoForm 
        description={this.state.description} 
        handleAdd={this.handleAdd}
        handleChange={this.handleChange} 
        handleSearch={this.handleSearch} />
      <TodoList todos={this.state.todos}
        handleRemove={this.handleRemove}
        handleMarkAsDone={this.handleMarkAsDone}
        handleMarkAsPending={this.handleMarkAsPending}>
      </TodoList>
      </div>
    )
  }
}