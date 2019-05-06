import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import ErrorDecorator from './ErrorDecorator'

const StyledButton = styled.button`
  border-radius: 4px;
  border: ${({ secondary }) => secondary ? 'solid 1px #bdbdbd' : 'none'};
  padding: 8px 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ theme, disabled, secondary }) => disabled
    ? (secondary
      ? '#aaa' : theme.primary ? theme.primary.disabled : '#61779e')
    : secondary
      ? 'black' : theme.primary ? theme.primary.text : 'white'};
  background-color: ${({ theme, secondary }) => secondary
    ? 'white'
    : theme.primary ? theme.primary.background : '#113577'};
  font-family: 'Barlow', sans;
  font-weight: ${({ secondary }) => secondary ? 400 : 200};
  :focus {
    outline: none;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.primary ? theme.primary.outline : '#93cdff'};
  }
`

const SpinnerSpan = styled.span`
  padding-left: 4px;
  color: ${({ disabled, inProgress, secondary }) => (disabled || inProgress) ? (secondary ? '#aaa' : '#61779e') : 'black'};
`

class Button extends Component {
  render () {
    const { label, secondary, inProgress, error, disabled, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <ErrorDecorator error={error}>
      <StyledButton
        secondary={secondary}
        error={error}
        disabled={disabled || inProgress}
        inProgress={inProgress}
        onClick={onClickIfAllowed}
      >
        {label}
        {inProgress ? <SpinnerSpan {...{ inProgress, disabled, secondary }}><Spinner /></SpinnerSpan> : null}
      </StyledButton>
    </ErrorDecorator>
  }
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  secondary: PropTypes.bool.isRequired
}

Button.defaultProps = {
  inProgress: false,
  disabled: false,
  error: false,
  secondary: false
}

export default Button
