import { Component } from 'react'
import PropTypes from 'prop-types'

class ValueComponent extends Component {
  handleChange (event, value) {
    const { disabled, inProgress, onChange } = this.props
    if (disabled || inProgress) {
      return
    }
    onChange(event, value)
  }
}

ValueComponent.propTypes = {
  disabled: PropTypes.boolean,
  inProgress: PropTypes.boolean,
  onChange: PropTypes.func
}

export default ValueComponent
