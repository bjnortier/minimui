import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  width: 38px;
  height: 22px;
  border: solid 1px ${({ disabled, inProgress, value }) => (value && !disabled) ? '#2e70b5' : '#ccc'};
  border-radius: 13px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  background-color: ${({ disabled, inProgress, value }) => disabled ? 'transparent' : value ? '#3b99fc' : '#fff'}
  :focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`
const Knob = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => props.value ? 16 : 0}px;
  top: 0px;
  width: 18px;
  height: 18px;
  border: solid 2px ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : '#113577'};
  border-radius: 50%;
  background-color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#e6e6e6' : '#fff'};
`

const SpinnerPad = styled.div`
  padding-left: 1px;
  color: #999;
`

class Switch extends ValueComponent {
  handleChange (event) {
    super.handleChange(event, !this.props.value)
  }

  /**
   * Prevent the default window scrolling behaviour when Switch has focus
   */
  handleKeyDown (event) {
    if (event.keyCode === 32) {
      event.preventDefault()
    }
  }

  handleKeyUp (event) {
    if (event.keyCode === 32) {
      this.handleChange(event)
    }
  }

  render () {
    const { value, disabled, error, inProgress } = this.props
    return <ErrorDecorator error={error}>
      <Outer
        tabIndex={disabled || inProgress ? null : 0}
        disabled={disabled}
        value={value}
        inProgress={inProgress}
        onClick={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      >
        <Knob value={value} disabled={disabled} inProgress={inProgress}>
          {inProgress ? <SpinnerPad><Spinner /></SpinnerPad> : null}
        </Knob>
      </Outer>
    </ErrorDecorator>
  }
}

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Switch.defaultProps = {
  value: false,
  disabled: false,
  error: false,
  inProgress: false
}

export default Switch
