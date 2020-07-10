import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner, { Pad } from './Spinner'

const Outer = styled.div`
  display: inline-block;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
  vertical-align: bottom;
`

const StyledInput = styled.input`
  border-radius: 4px;
  border: solid 1px transparent;
  width: ${props => props.width - 16}px;
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  cursor: ${({ disabled, inProgress }) => (disabled || inProgress) ? 'not-allowed' : 'pointer'};
  :focus {
    outline: none;
    border: solid 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
    box-shadow: 0 0 4px 1px ${({ theme }) => theme.primary ? theme.primary.outline : '#3f8ed4'};
  }
`

const SpinnerOuter = styled.div`
  display: inline-block;
  vertical-align: super;
`

class Slider extends ValueComponent {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    super.handleChange(event, parseInt(event.target.value))
  }

  render () {
    const { id, value, disabled, min, max, inProgress, error } = this.props
    return (
      <Outer
        {...{ disabled, error, inProgress }}
      >
        <ErrorDecorator error={error}>
          <StyledInput
            {...{ id, value, disabled, min, max }}
            disabled={disabled || inProgress}
            onChange={this.handleChange}
            type='range'
          />
        </ErrorDecorator>
        {inProgress ? <SpinnerOuter><Pad /><Spinner /></SpinnerOuter> : null}
      </Outer>
    )
  }
}

Slider.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  id: PropTypes.string,
  value: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Slider.defaultProps = {
  width: 96,
  value: 0,
  min: 0,
  max: 100,
  disabled: false,
  error: false,
  inProgress: false
}

export default Slider
