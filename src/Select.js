import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  user-select: none;
`

const StyledSelect = styled.select`
  border: solid 1px #ccc;
  height: 25px;
  background-color: #fff;
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  :focus {
    outline: none;
  }
`

const SpinnerSpan = styled.span`
  padding-left: 5px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
`

class Select extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: props.value
    }
  }

  handleChange (event) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    if (onChange) {
      onChange(event, event.target.value)
    } else {
      this.setState({ value: event.target.value })
    }
  }

  render () {
    const { disabled, error, inProgress } = this.props
    const { value } = this.state
    return <Outer {...{ disabled, error, inProgress }}>
      <Decorator error={error} bottom={-4}>
        <StyledSelect
          value={value}
          disabled={disabled || inProgress}
          onChange={this.handleChange.bind(this)}
        >
          {this.props.children}
        </StyledSelect>
      </Decorator>
      {inProgress ? <SpinnerSpan {...{ inProgress, disabled }}><Spinner /></SpinnerSpan> : null}
    </Outer>
  }
}

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

export default Select
