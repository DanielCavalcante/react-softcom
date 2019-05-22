import React from 'react'
import IconButton from '../utils/IconButton'

export default props => {

  const renderDivs = () => {
    const todos = props.todos || [];

    return todos.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton style='success' icon='check' hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}>
          </IconButton>
          <IconButton style='warning' icon='undo' hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}>
          </IconButton>
          <IconButton style='danger' icon='trash-o' hide={!todo.done}
            onClick={() => props.handleRemove(todo)}>
          </IconButton>
        </td>
      </tr>
    ))
  }
  return (
    <div>
      <h2 className='title'>Todo List</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Description</th>
            <th className='tableActions'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderDivs()}
        </tbody>
      </table>
    </div>
  )
}