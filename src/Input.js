import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'

const StyledInput = styled.input`
  border: solid 1px #ccc;
  color: ${props => props.error ? 'red' : props.disabled ? '#999' : 'black'};
  border-bottom: solid 1px ${props => props.error ? '#f00' : '#ccc'};
  padding: 7px;
  width: ${props => props.width - 16}px;
  &:focus {
    outline: 0
    border-bottom: solid 1px #484848;
  }
`

class Input extends Component {
  constructor (props, context) {
    super(props, context)
    this.inputRef = React.createRef()
    this.state = {
      value: props.value || ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== undefined) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange (event) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    if (onChange) {
      onChange(event, event.target.value)
    } else {
      this.setState({ value: event.target.value })
    }
  }

  render () {
    const { name, type, placeholder, disabled, onKeyUp, error } = this.props
    const { value } = this.state
    return <Decorator error={error}>
      <StyledInput {...this.props}
        {...{ name, value, placeholder, onKeyUp, disabled }}
        onChange={this.handleChange.bind(this)}
        type={type || 'text'}
        innerRef={this.inputRef}
      />
    </Decorator>
  }

  get value () {
    return this.state.value
  }
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  error: PropTypes.bool
}

Input.defaultProps = {
  width: 80
}

export default Input
