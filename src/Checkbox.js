import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const CheckboxAdjust = styled.div`
  position: relative;
  bottom: 1.5px;
`

const StyledInput = styled.input`
  font-size: 16px;
  :focus {
    outline: none;
  }
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`

const Label = styled.span`
  padding-left: 2px;
  padding-right: 2px;
  color: ${({ disabled, inProgress, error }) => (disabled || inProgress) ? '#999' : error ? 'red' : 'black'};
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
      <Decorator error={error} bottom={-8} >
        <CheckboxAdjust>
          <StyledInput
            type='checkbox'
            disabled={disabled || inProgress}
            checked={on}
            onChange={this.handleClick.bind(this)}
          />
        </CheckboxAdjust>
      </Decorator>
      <Label {...{ inProgress, disabled, error }}>{label}</Label>
      {inProgress ? <Spinner padLeft={inProgress || disabled} /> : null}
    </Outer>
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
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
