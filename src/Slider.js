import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ValueComponent from './ValueComponent'
import ErrorDecorator from './ErrorDecorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
  user-select: none;
  vertical-align: bottom;
`

const StyledInput = styled.input`
  border-radius: 4px;
  border: solid 1px #ccc;
  padding: 8px;
  width: ${props => props.width - 16}px;
  color: ${({ disabled }) => disabled ? '#999' : 'black'};
  &:focus {
    outline: none;
    box-shadow: 0 0 0px 2px ${({ theme }) => theme.primary ? theme.primary.outline : '#93cdff'};
  }
`

const SpinnerOuter = styled.div`
  display: inline-block;
  vertical-align: super;
`

class Slider extends ValueComponent {
  handleChange (event) {
    super.handleChange(event, parseInt(event.target.value))
  }

  render () {
    const { name, value, disabled, inProgress, error } = this.props
    return <Outer
      {...{ disabled, error, inProgress }}
    >
      <ErrorDecorator error={error}>
        <StyledInput {...this.props}
          {...{ name, value }}
          disabled={disabled || inProgress}
          onChange={this.handleChange.bind(this)}
          type='range'
        />
      </ErrorDecorator>
      {inProgress ? <SpinnerOuter><Spinner padLeft /></SpinnerOuter> : null}
    </Outer>
  }
}

Slider.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string,
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
