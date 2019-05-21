import React from 'react'
import Grid from '../utils/Grid'
import IconButton from '../utils/IconButton'

export default props => (
  <div className='row'>
    <Grid cols='10 8 8'>
      <input 
        id='description' 
        className='form-control' 
        placeholder='Add task'
        value={props.description}
        onChange={props.handleChange} />
    </Grid>
    <Grid cols='1'>
      <IconButton style='primary' text='Adicionar' icon='plus' onClick={props.handleAdd} />
      <IconButton style='info' text='Pesquisar' icon='search' onClick={props.handleSearch} />
    </Grid>
  </div>
)

