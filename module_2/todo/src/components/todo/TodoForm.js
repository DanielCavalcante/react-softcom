import React from 'react'
import IconButton from '../utils/IconButton'

export default props => (
  <div>
    <h2 className='title'>Add Todo</h2>
      <div className='row'>
      <div className='col-8'>
        <input 
          id='description' 
          className='form-control' 
          placeholder='Add task'
          value={props.description}
          onChange={props.handleChange} />      
      </div>
      <div className='col-4'>
        <IconButton style='warning' text='Adicionar' icon='plus' onClick={props.handleAdd} />
        <IconButton style='dark' text='Pesquisar' icon='search' onClick={props.handleSearch} />  
      </div>
  </div>
  </div>
)

