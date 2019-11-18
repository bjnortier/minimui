import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner from './Spinner'

const Label = styled.span`
  padding-left: 4px;
  padding-right: 2px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'inherit'};
`

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'inherit'};
  user-select: none;
`

const Check = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  border: solid 1px ${({ disabled, inProgress, value, theme }) => (value && !disabled && !inProgress)
    ? theme.primary ? theme.primary.background : '#113577'
    : disabled || inProgress
      ? '#dedede'
      : 'white'};
  border-radius: 4px;
  vertical-align: bottom;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  background-image:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
      <path fill='${({ disabled, inProgress, theme, value }) =>
    value
      ? (disabled || inProgress)
        ? 'gray'
        : 'white'
      : 'transparent'
}' d='M3,7L6,12L11,3L10,2L6,9L4,6L3,7' /></svg>");
  background-repeat: no-repeat;
  background-color: ${({ disabled, inProgress, theme, value }) =>
    (disabled || inProgress)
      ? '#e6e6e6'
      : value
        ? theme.primary ? theme.primary.background : '#113577'
        : '#fff'};
  box-shadow: 0px 0px 8px 2px #0000000d;
  :focus {
    outline: none;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.primary ? theme.primary.outline : '#93cdff'};
  }
`

class Checkbox extends ValueComponent {
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
   * Prevent the default window scrolling behaviour when Checkbox has focus
   */
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
    const { label, value, disabled, error, inProgress } = this.props
    return (
      <Outer
        {...{ disabled, error, inProgress }}
        onClick={this.handleChange}
      >
        <ErrorDecorator error={error}>
          <Check
            tabIndex={disabled || inProgress ? null : 0}
            disabled={disabled}
            value={value}
            inProgress={inProgress}
            onKeyDown={this.handleKeyDown}
            onKeyUp={this.handleKeyUp}
          />
          {label ? <Label {...{ inProgress, disabled }}>{label}</Label> : null}
          {inProgress ? <Spinner padLeft={inProgress || disabled} /> : null}
        </ErrorDecorator>
      </Outer>
    )
  }
}

Checkbox.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Checkbox.defaultProps = {
  value: false,
  disabled: false,
  error: false,
  inProgress: false
}

export default Checkbox
