import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import ErrorDecorator from './ErrorDecorator'

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  padding: 7px 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled ? '#61779e' : 'white'};
  background-color: #113577;
  :focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`

const SpinnerSpan = styled.span`
  padding-left: 4px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#61779e' : 'black'};
`

class TextButton extends Component {
  render () {
    const { label, inProgress, error, disabled, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <ErrorDecorator error={error}>
      <StyledButton
        error={error}
        disabled={disabled || inProgress}
        inProgress={inProgress}
        onClick={onClickIfAllowed}
      >
        {label}
        {inProgress ? <SpinnerSpan {...{ inProgress, disabled }}><Spinner /></SpinnerSpan> : null}
      </StyledButton>
    </ErrorDecorator>
  }
}

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  inProgress: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default TextButton
