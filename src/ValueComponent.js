import { Component } from 'react'

class ValueComponent extends Component {
  handleChange (event, value) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    onChange(event, value)
  }
}

export default ValueComponent
