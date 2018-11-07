import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'auto'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const StyledInput = styled.input`
  border-radius: 5px;
  border: solid 1px #ccc;
  padding: 7px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  &:focus {
    outline: none;
    border-color: #5b9dd6;
    box-shadow: 0 0 0px 2px #93cdff;
  }
`

class Input extends ValueComponent {
  constructor (props) {
    super(props, '')
  }

  handleChange (event) {
    super.handleChange(event, event.target.value)
  }

  render () {
    const { name, type, placeholder, disabled, inProgress, onKeyUp, error } = this.props
    const { value } = this.state
    return <Outer
      {...{ disabled, error, inProgress }}
    >
      <Decorator error={error}>
        <StyledInput {...this.props}
          {...{ name, value, placeholder, onKeyUp }}
          disabled={disabled || inProgress}
          onChange={this.handleChange.bind(this)}
          type={type || 'text'}
        />
      </Decorator>
      {inProgress ? <Spinner padLeft /> : null}
    </Outer>
  }
}

Input.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Input.defaultProps = {
  width: 80,
  value: '',
  disabled: false,
  error: false,
  inProgress: false
}

export default Input
