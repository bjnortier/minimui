import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Spinner from './Spinner'
import ErrorDecorator from './ErrorDecorator'

const StyledButton = styled.button`
  position: relative;
  border-radius: 22px;
  border: solid 1px ${({ theme, secondary, transparent }) => transparent
    ? 'transparent'
    : secondary
      ? 'white'
      : theme.primary
        ? theme.primary.background
        : '#113577'};
  padding: 8px 12px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ theme, disabled, secondary, transparent }) => disabled
    ? ((secondary || transparent)
      ? '#aaa' : theme.primary ? theme.primary.disabled : '#61779e')
    : (secondary || transparent)
      ? 'black' : theme.primary ? theme.primary.text : 'white'};
  background-color: ${({ theme, transparent, secondary }) => secondary
    ? 'white'
    : transparent
      ? 'transparent'
      : theme.primary ? theme.primary.background : '#113577'};
  font-weight: ${({ transparent, secondary }) => (transparent || secondary) ? 400 : 300};
  ${({ transparent }) => transparent ? '' : 'box-shadow: 0px 0px 8px 2px #0000000d;'}
  :focus {
    outline: none;
    ${({ transparent, theme }) => transparent
      ? ''
      : `border: solid 1px ${theme.primary ? theme.primary.outline : '#3f8ed4'};`
    }
    ${({ transparent, theme }) => transparent
      ? ''
      : `box-shadow: 0 0 4px 1px ${theme.primary ? theme.primary.outline : '#3f8ed4'}`
    }
    ${({ transparent, theme }) => transparent
      ? 'text-decoration: underline;'
      : ''
    }
  }
  :active:hover {
    top: 1px;
  }
`

const SpinnerSpan = styled.span`
  padding-left: 4px;
  color: ${({ disabled, inProgress, secondary }) => (disabled || inProgress) ? (secondary ? '#aaa' : '#61779e') : 'black'};
`

class Button extends Component {
  render () {
    const { id, label, transparent, secondary, inProgress, error, disabled, onClick } = this.props
    if (transparent && secondary) {
      console.warn('<Button /> cannot be both secondary and transparent. Rendered as transparent.')
    }
    const onClickIfAllowed = (event) => {
      if (!disabled && !inProgress) {
        onClick(event)
      }
    }
    return (
      <ErrorDecorator error={error}>
        <StyledButton
          className='minimui-button'
          {...{ secondary, transparent, id, inProgress }}
          disabled={disabled || inProgress}
          onClick={onClickIfAllowed}
        >
          {label}
          {inProgress ? <SpinnerSpan {...{ inProgress, disabled, secondary }}><Spinner /></SpinnerSpan> : null}
        </StyledButton>
      </ErrorDecorator>
    )
  }
}

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  inProgress: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  secondary: PropTypes.bool.isRequired,
  transparent: PropTypes.bool.isRequired
}

Button.defaultProps = {
  inProgress: false,
  disabled: false,
  error: false,
  secondary: false,
  transparent: false
}

export default Button
