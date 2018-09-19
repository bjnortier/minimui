import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import Decorator from './Decorator'

const StyledButton = styled.button`
  border-radius: 16px;
  padding: 7px 10px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  border: solid 1px #ccc;
  background-color: white;
  :focus {
    outline: none;
  }
`

const SpinnerSpan = styled.span`
  padding-left: 5px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
`

class TextButton extends Component {
  render () {
    const { label, inProgress, error, disabled, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <Decorator error={error}>
      <StyledButton
        error={error}
        disabled={disabled || inProgress}
        inProgress={inProgress}
        onClick={onClickIfAllowed}
      >
        {label}
        {inProgress ? <SpinnerSpan {...{ inProgress, disabled }}><Spinner /></SpinnerSpan> : null}
      </StyledButton>
    </Decorator>
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
