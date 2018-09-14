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
  cursor: ${props => (props.disabled || props.spinning) ? 'not-allowed' : 'pointer'};
  color: ${props => props.error ? 'red' : (props.disabled || props.spinning) ? '#999' : 'black'};
  border: solid 1px ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  :focus {
    outline: none;
  }
`

class IconButton extends Component {
  render () {
    const { icon, spinning, error, disabled, borderColor, backgroundColor, onClick } = this.props
    const onClickIfAllowed = (event) => {
      if (!disabled && !spinning) {
        onClick(event)
      }
    }
    return <Decorator error={error}>
      <StyledButton {...{ error, disabled, borderColor, backgroundColor, spinning }}
        onClick={onClickIfAllowed}
      >
        <FontAwesomeIcon icon={icon} spin={spinning} />
      </StyledButton>
    </Decorator>
  }
}

IconButton.propTypes = {
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  spinning: PropTypes.bool,
  disabled: PropTypes.bool,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  error: PropTypes.bool
}

IconButton.defaultProps = {
  borderColor: '#ccc',
  backgroundColor: 'white'
}

export default IconButton
