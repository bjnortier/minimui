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
  border: solid 1px ${({ disabled, inProgress, value, theme }) => (value && !disabled)
    ? theme.primary ? theme.primary.background : '#113577'
    : '#eee'};
  border-radius: 13px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  background-color: ${({ disabled, inProgress, value, theme }) => disabled ? 'transparent' : value
    ? theme.primary ? theme.primary.background : '#113577'
    : '#fff'};
  box-shadow: 0px 0px 8px 2px #0000000d;
  :focus {
    outline: none;
    border: solid 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
  }
`
const Knob = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => props.value ? 16 : 0}px;
  top: 0px;
  width: 18px;
  height: 18px;
  border: solid 2px ${({ disabled, inProgress, theme }) => (disabled || inProgress)
    ? '#999'
    : theme.primary ? theme.primary.background : '#113577'};
  border-radius: 50%;
  background-color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#e6e6e6' : '#fff'};
`

const SpinnerPad = styled.div`
  padding-left: 0.5px;
  padding-top: 0.5px;
  color: #999;
`

class Switch extends ValueComponent {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

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
    const { id, value, disabled, error, inProgress } = this.props
    return (
      <ErrorDecorator error={error}>
        <Outer
          tabIndex={disabled || inProgress ? null : 0}
          {...{ id, value, disabled }}
          inProgress={inProgress}
          onClick={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
        >
          <Knob className='knob' value={value} disabled={disabled} inProgress={inProgress}>
            {inProgress ? <SpinnerPad><Spinner /></SpinnerPad> : null}
          </Knob>
        </Outer>
      </ErrorDecorator>
    )
  }
}

Switch.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
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
