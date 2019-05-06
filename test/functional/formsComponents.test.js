import React, { Component } from 'react'

const renderValue = value => {
  switch (typeof value) {
    case 'string':
    case 'number':
      return `${value} [${typeof value}]`
    case 'boolean':
      return `${value ? 'true' : 'false'} [${typeof value}]`
    default:
      return value
  }
}

class Row extends Component {
  render () {
    const { label } = this.props
    const { value } = this.state
    return <tr>
      <td>{label}</td>
      <td>{this.createElement()}</td>
      <td>{renderValue(value)}</td>
    </tr>
  }
}

export class OnChangeRow extends Row {
  constructor (props) {
    super(props)
    this.state = {
      value: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.setState({ value })
  }

  createElement () {
    const { Component, componentProps, componentChildren } = this.props
    const { value } = this.state
    return React.createElement(Component, {
      ...componentProps,
      onChange: this.handleChange,
      value: value !== undefined ? value : componentProps.value
    }, componentChildren)
  }
}

export class OnClickRow extends Row {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({ value: this.state.value + 1 })
  }

  createElement () {
    const { Component, componentProps, componentChildren } = this.props
    return React.createElement(Component, {
      ...componentProps,
      onClick: this.handleClick
    }, componentChildren)
  }
}
