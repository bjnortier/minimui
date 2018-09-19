import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const StyledInput = styled.input`
  border: solid 1px #ccc;
  border-bottom: solid 1px ${props => props.error ? '#f00' : '#ccc'};
  padding: 7px;
  width: ${props => props.width - 16}px;
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  &:focus {
    outline: 0
    border-bottom: solid 1px #484848;
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
