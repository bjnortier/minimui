import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'auto'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const StyledInput = styled.input`
  border-radius: 4px;
  background-color: #fff;
  border: solid 1px #ececec;
  padding: 8px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  box-shadow: inset 0px 0px 8px 2px #0000000d;
  &:focus {
    outline: none;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.primary ? theme.primary.outline : '#93cdff'};
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
    const { type, disabled, inProgress, error } = this.props
    return (
      <Outer
        {...{ disabled, error, inProgress }}
      >
        <ErrorDecorator error={error}>
          <StyledInput
            {...this.props}
            disabled={disabled || inProgress}
            onChange={this.handleChange}
            type={type || 'text'}
          />
        </ErrorDecorator>
        {inProgress ? <Spinner padLeft /> : null}
      </Outer>
    )
  }
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
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
