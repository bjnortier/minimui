import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'
import Spinner from './Spinner'
import HalfHSpace from './HalfHSpace'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  color: ${({ error, disabled, inProgress }) => error ? 'red' : (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const Input = styled.input`
  font-size: 16px;
  :focus {
    outline: none;
  }
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
`

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      on: props.on
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.on !== undefined) {
      this.setState({ on: nextProps.on })
    }
  }

  handleClick (event) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    if (onChange) {
      // State is managed outside of component (e.g. redux)
      onChange(event, !this.state.on)
    } else {
      this.setState({ on: !this.state.on })
    }
  }

  handleKeyUp (event) {
    if (event.keyCode === 32) {
      this.handleClick(event)
    }
  }

  render () {
    const { disabled, error, inProgress, label } = this.props
    const { on } = this.state
    return <Outer
      {...{ disabled, error, inProgress }}
      onClick={this.handleClick.bind(this)}
    >
      <Decorator error={error} bottom={-8} left={-6} >
        <Input
          type='checkbox'
          disabled={disabled || inProgress}
          checked={on}
          onChange={this.handleClick.bind(this)}
        />
      </Decorator>
      {label}
      {inProgress ? <React.Fragment><HalfHSpace /><Spinner /></React.Fragment> : null}
    </Outer>
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Checkbox.defaultProps = {
  on: false,
  disabled: false,
  error: false,
  inProgress: false
}

export default Checkbox
