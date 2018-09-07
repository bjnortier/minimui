import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSpan = styled.span`
  font-size: 12px;
  color: #666;
`

class DateString extends Component {
  render () {
    const { timestamp } = this.props
    const dateString = new Date(timestamp).toDateString()
    return <StyledSpan>{dateString}</StyledSpan>
  }
}

DateString.propTypes = {
  timestamp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired
}

export default DateString
