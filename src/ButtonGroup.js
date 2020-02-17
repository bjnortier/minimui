import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import ErrorDecorator from './ErrorDecorator'

const StyledButtonGroup = styled.div`
  display: inline-block;
  border-radius: 22px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0px 0px 8px 2px #0000000d;
  user-select: none;
  :focus {
    outline: none;
    ${({ theme }) =>
      `box-shadow: 0 0 4px 1px ${theme.primary ? theme.primary.outline : '#3f8ed4'}`
    }
  }
`

const Button = styled.div`
  display: inline-block;
  padding: 8px 12px;
  &:first-child {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
  }
  &:last-child {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
  }
  font-weight:  ${({ active }) => active ? 300 : 400};
  color: ${({ theme, disabled, active }) => disabled
    ? active ? theme.primary ? theme.primary.disabled : '#61779e' : '#aaa'
    : active
      ? theme.primary ? theme.primary.text : 'white'
      : 'black'};
  background-color: ${({ theme, active }) =>
    active ? theme.primary ? theme.primary.background : '#113577' : 'white'};
`

const SpinnerSpan = styled.span`
  padding-left: 4px;
  color: ${({ disabled, inProgress, secondary }) => (disabled || inProgress) ? (secondary ? '#aaa' : '#61779e') : 'black'};
`

class ButtonGroup extends Component {
  render () {
    const { id, value, labels, values, inProgress, error, disabled, onChange } = this.props
    if (labels.length !== values.length) {
      throw Error('Mismached label and value count')
    }
    return (
      <ErrorDecorator error={error}>
        <StyledButtonGroup
          tabIndex={disabled || inProgress ? null : 0}
          {...{ id, inProgress }}
          disabled={disabled || inProgress}
        >
          {values.map((v, i) => (
            <Button
              onClick={(event) => {
                if (!disabled && !inProgress) { onChange(event, v) }
              }}
              active={value === v}
              disabled={disabled || inProgress}
              key={v}
            >
              {labels[i]}
            </Button>
          ))}
        </StyledButtonGroup>
        {inProgress ? <SpinnerSpan {...{ inProgress, disabled }}><Spinner /></SpinnerSpan> : null}
      </ErrorDecorator>
    )
  }
}

ButtonGroup.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  labels: PropTypes.array.isRequired,
  values: PropTypes.array.isRequired,
  value: PropTypes.any.isRequired
}

ButtonGroup.defaultProps = {
  inProgress: false,
  disabled: false,
  error: false,
  secondary: false,
  transparent: false
}

export default ButtonGroup
