import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner, { Pad } from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'auto'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const StyledInput = styled.input`
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #e8e8e8;
  padding: 8px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  box-shadow: 0px 0px 8px 2px #0000000d;
  :focus {
    outline: none;
    border: solid 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
  }
`

class Input extends ValueComponent {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    super.handleChange(event, event.target.value)
  }

  render () {
    const {
      type,
      id,
      value,
      disabled,
      placeholder,
      autoComplete,
      width,
      inProgress,
      error,
      onKeyUp
    } = this.props
    return (
      <Outer
        {...{ disabled, error, inProgress }}
        className='minimui-input'
      >
        <ErrorDecorator error={error}>
          <StyledInput
            {... { id, value, inProgress, placeholder, autoComplete, width }}
            disabled={disabled || inProgress}
            onChange={this.handleChange}
            onKeyUp={onKeyUp}
            type={type || 'text'}
          />
        </ErrorDecorator>
        {inProgress ? <><Pad /><Spinner /></> : null}
      </Outer>
    )
  }
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Input.defaultProps = {
  width: 96,
  value: '',
  disabled: false,
  error: false,
  inProgress: false
}

export default Input
