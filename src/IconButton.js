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
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  border: solid 1px ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  :focus {
    outline: none;
  }
`

class IconButton extends Component {
  render () {
    const { icon, inProgress, error, disabled, borderColor, backgroundColor, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return <Decorator error={error}>
      <StyledButton
        {...{ error, borderColor, backgroundColor, inProgress }}
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
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

IconButton.defaultProps = {
  borderColor: '#ccc',
  backgroundColor: 'white'
}

export default IconButton
