import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  user-select: none;
`

const StyledInput = styled.input`
  border: solid 1px #ccc;
  color: ${props => props.error ? 'red' : props.disabled ? '#999' : 'black'};
  border-bottom: solid 1px ${props => props.error ? '#f00' : '#ccc'};
  padding: 7px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
  &:focus {
    outline: 0
    border-bottom: solid 1px #484848;
  }
`

const SpinnerSpan = styled.span`
  padding-left: 5px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
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
    const { name, type, placeholder, disabled, inProgress, onKeyUp, error } = this.props
    const { value } = this.state
    return <Outer
      {...{ disabled, error, inProgress }}
    >
      <Decorator error={error}>
        <StyledInput {...this.props}
          {...{ name, value, placeholder, onKeyUp }}
          disabled={disabled || inProgress}
          onChange={this.handleChange.bind(this)}
          type={type || 'text'}
          innerRef={this.inputRef}
        />
      </Decorator>
      {inProgress ? <SpinnerSpan {...{ inProgress, disabled }}><Spinner /></SpinnerSpan> : null}
    </Outer>
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
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Input.defaultProps = {
  width: 80
}

export default Input
