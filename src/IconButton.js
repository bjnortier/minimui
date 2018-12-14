import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import ErrorDecorator from './ErrorDecorator'

const StyledButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 32px;
  padding: 7px 8px;
  text-align: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled ? '#61779e' : 'white'};
  background-color: #113577;
  :focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`

class IconButton extends Component {
  render () {
    const { icon, inProgress, error, disabled, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <ErrorDecorator error={error} left={0}>
      <StyledButton
        {...{ error, inProgress }}
        disabled={disabled || inProgress}
        onClick={onClickIfAllowed}
      >
        {inProgress
          ? <FontAwesomeIcon icon={faCircleNotch} spin={inProgress} />
          : <FontAwesomeIcon icon={icon} />}
      </StyledButton>
    </ErrorDecorator>
  }
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

IconButton.defaultProps = {
  disabled: false,
  error: false,
  inProgress: false,
  transparent: false
}

export default IconButton
