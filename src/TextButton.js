import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import HSpace from './HSpace'
import Decorator from './Decorator'

const StyledButton = styled.button`
  border-radius: 16px;
  padding: 7px 10px;
  cursor: ${props => (props.disabled || props.ellipsis) ? 'not-allowed' : 'pointer'};
  color: ${props => props.error ? 'red' : (props.disabled || props.ellipsis) ? '#999' : 'black'};
  border: solid 1px #ccc;
  background-color: white;
  :focus {
    outline: none;
  }
`

class TextButton extends Component {
  render () {
    const { label, ellipsis, error, disabled, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !ellipsis) {
        onClick(event)
      }
    }
    return <Decorator error={error}>
      <StyledButton
        error={error}
        disabled={disabled}
        ellipsis={ellipsis}
        onClick={onClickIfAllowed}
      >
        {label}
        {ellipsis ? <React.Fragment><HSpace /><Spinner /></React.Fragment> : null}
      </StyledButton>
    </Decorator>
  }
}

TextButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ellipsis: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool
}

export default TextButton
