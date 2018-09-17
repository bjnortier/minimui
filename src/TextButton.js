import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import HalfHSpace from './HalfHSpace'
import Decorator from './Decorator'

const StyledButton = styled.button`
  border-radius: 16px;
  padding: 7px 10px;
  cursor: ${props => (props.disabled || props.inProgress) ? 'not-allowed' : 'pointer'};
  color: ${props => props.error ? 'red' : (props.disabled || props.inProgress) ? '#999' : 'black'};
  border: solid 1px #ccc;
  background-color: white;
  :focus {
    outline: none;
  }
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
        disabled={disabled}
        inProgress={inProgress}
        onClick={onClickIfAllowed}
      >
        {label}
        {inProgress ? <React.Fragment><HalfHSpace /><Spinner /></React.Fragment> : null}
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
