import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
`

const StyledSelect = styled.select`
  height: 24px;
  background-color: #fff;
  border: solid 1px #eee;
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  box-shadow: 0px 0px 8px 2px #0000000d;
  :focus {
    outline: none;
    border: solid 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
  }
`

class Select extends ValueComponent {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    super.handleChange(event, event.target.value)
  }

  render () {
    const { id, value, disabled, error, inProgress } = this.props
    return (
      <Outer {...{ disabled, error, inProgress }}>
        <ErrorDecorator error={error}>
          <StyledSelect
            {...{ id, value }}
            disabled={disabled || inProgress}
            onChange={this.handleChange}
          >
            {this.props.children}
          </StyledSelect>
        </ErrorDecorator>
        {inProgress ? <Spinner padLeft={inProgress || disabled} /> : null}
      </Outer>
    )
  }
}

Select.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Select.defaultProps = {
  disabled: false,
  error: false,
  inProgress: false
}

export default Select
