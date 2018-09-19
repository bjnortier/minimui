import { Component } from 'react'

class ValueComponent extends Component {
  constructor (props, defaultValue) {
    super(props)
    this.state = {
      value: props.value !== undefined ? props.value : defaultValue
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.value !== undefined) {
      this.setState({ value: nextProps.value })
    }
  }

  handleChange (event, value) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    if (onChange) {
      onChange(event, value)
    } else {
      this.setState({ value })
    }
  }

  get value () {
    return this.state.value
  }
}

export default ValueComponent
