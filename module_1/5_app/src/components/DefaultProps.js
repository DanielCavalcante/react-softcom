import React from 'react'

export default class DefaultProps extends React.Component {

  static defaultProps = {
    nomeEmpresa: 'Desconhecido'
  }

  render() {
    return <h1>Olá {this.props.nomeEmpresa}</h1>
  }
}
