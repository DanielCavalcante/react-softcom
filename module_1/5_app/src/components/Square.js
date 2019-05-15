import React from 'react'

const Square = ({ color }) => (
  <div style={{backgroundColor: color, height: '100px', width: '100px'}} />
)

Square.defaultProps = {
  color: 'yellow'
}

export default Square