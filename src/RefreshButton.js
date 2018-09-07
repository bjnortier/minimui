import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'

import IconButton from './IconButton'

class RefreshButton extends Component {
  render () {
    const { readyState, onClick } = this.props
    return <IconButton
      borderColor='transparent'
      backgroundColor='transparent'
      icon={faSyncAlt}
      spinning={readyState === 'in-progress'}
      error={readyState === 'error'}
      onClick={onClick}
    />
  }
}

RefreshButton.propTypes = {
  readyState: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default RefreshButton
