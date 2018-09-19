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

const CheckboxAdjust = styled.div`
  position: relative;
  bottom: 1.5px;
`

const StyledInput = styled.input`
  font-size: 16px;
  :focus {
    outline: none;
  }
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`

const Label = styled.span`
  padding-left: 2px;
  padding-right: 2px;
  color: ${({ disabled, inProgress }) => (disabled || inProgress) ? '#999' : 'black'};
`

class Checkbox extends ValueComponent {
  handleChange (event) {
    super.handleChange(event, !this.state.value)
  }

  render () {
    const { disabled, error, inProgress, label } = this.props
    const { value } = this.state
    return <Outer
      {...{ disabled, error, inProgress }}
      onClick={this.handleChange.bind(this)}
    >
      <Decorator error={error} bottom={-8} >
        <CheckboxAdjust>
          <StyledInput
            type='checkbox'
            disabled={disabled || inProgress}
            checked={value}
            onChange={this.handleChange.bind(this)}
          />
        </CheckboxAdjust>
      </Decorator>
      <Label {...{ inProgress, disabled }}>{label}</Label>
      {inProgress ? <Spinner padLeft={inProgress || disabled} /> : null}
    </Outer>
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Checkbox.defaultProps = {
  value: false,
  disabled: false,
  error: false,
  inProgress: false
}

export default Checkbox
