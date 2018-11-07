import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Decorator from './Decorator'

const StyledButton = styled.button`
  border-radius: 16px;
  width: 32px;
  padding: 7px 8px;
  text-align: center;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled ? '#999' : 'inherit'};
  border: solid 1px ${({ transparent }) => transparent ? 'transparent' : '#ccc'};
  background-color: ${({ transparent }) => transparent ? 'transparent' : 'white'};
  :focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`

class IconButton extends Component {
  render () {
    const { icon, inProgress, error, disabled, transparent, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <Decorator error={error} left={transparent ? 6 : 0}>
      <StyledButton
        {...{ error, transparent, inProgress }}
        disabled={disabled || inProgress}
        onClick={onClickIfAllowed}
      >
        <FontAwesomeIcon icon={icon} spin={inProgress} />
      </StyledButton>
    </Decorator>
  }
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
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
