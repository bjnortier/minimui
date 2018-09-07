import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Decorator from './Decorator'
import Spinner from './Spinner'

const Outer = styled.div`
  display: inline-block;
  width: 48px;
  height: 30px;
  border: solid 1px #ccc;
  border-radius: 16px;
  vertical-align: middle;
  position: relative;
  top: -1px;
  cursor: ${props => (props.disabled || props.inProgress) ? 'not-allowed' : 'pointer'};
  background-color: ${props => (props.on && !props.disabled) ? '#f5f5f5' : 'transparent'}
  :focus {
    outline: none;
  }
`
const Knob = styled.div`
  display: inline-block;
  position: absolute;
  left: ${props => props.on ? 19 : -1}px;
  top: 0;
  width: 28px;
  height: 28px;
  border: solid 1px #333;
  border-radius: 15px;
  background-color: ${props => (props.disabled) ? 'transparent' : '#fff'};
`

const SpinnerPad = styled.div`
  padding-left: 7px;
  padding-top: 6px;
  color: #999;
`

class Switch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      on: props.on
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.on !== undefined) {
      this.setState({on: nextProps.on})
    }
  }

  handleClick (event) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    if (onChange) {
      // State is managed outside of component (e.g. redux)
      onChange(event, !this.state.on)
    } else {
      this.setState({on: !this.state.on})
    }
  }

  handleKeyUp (event) {
    if (event.keyCode === 32) {
      this.handleClick(event)
    }
  }

  render () {
    const { disabled, error, inProgress } = this.props
    const { on } = this.state
    return <Decorator error={error}>
      <Outer
        tabIndex={disabled ? null : 0}
        disabled={disabled}
        on={on}
        inProgress={inProgress}
        onClick={this.handleClick.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      >
        <Knob on={on} disabled={disabled} inProgress={inProgress}>
          {inProgress ? <SpinnerPad><Spinner /></SpinnerPad> : null}
        </Knob>
      </Outer>
    </Decorator>
  }
}

Switch.propTypes = {
  onChange: PropTypes.func,
  on: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  inProgress: PropTypes.bool
}

Switch.defaultProps = {
  on: false,
  disabled: false,
  error: false,
  inProgress: false
}

export default Switch
