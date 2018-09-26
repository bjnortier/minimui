import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCircle } from '@fortawesome/free-solid-svg-icons'

export const Container = styled.div`
  display: inline-block;
  position: relative;
}
`
const FocusIconContainer = styled.div`
  position: absolute;
  left: ${props => props.left ? props.left - 7 : -7}px;
  bottom: ${props => props.bottom ? props.bottom + 7.5 : 7.5}px;
  font-size: 5px;
  z-index: 1;
}
`

const ErrorIconContainer = styled.div`
  position: absolute;
  left: ${props => props.left ? props.left - 7.5 : -7.5}px;
  bottom: ${props => props.bottom ? props.bottom + 7.5 : 7.5}px;
  font-size: 9px;
  color: red;
  z-index: 1;
}
`

const FocusIcon = (props) => <FocusIconContainer left={props.left} bottom={props.bottom} >
  <FontAwesomeIcon icon={faCircle} />
</FocusIconContainer>

const ErrorIcon = (props) => {
  return <ErrorIconContainer left={props.left} bottom={props.bottom} >
    <FontAwesomeIcon icon={faTimes} />
  </ErrorIconContainer>
}

class Decorator extends Component {
  constructor (props, context) {
    super(props, context)
    this.decoratedRef = React.createRef()
    this.state = {
      focussed: false
    }
  }

  handleFocus () {
    this.setState({ focussed: true })
  }

  handleBlur () {
    this.setState({ focussed: false })
  }

  render () {
    const { left, bottom } = this.props
    const bottomOffset = this.state.focussed && this.props.error ? 4 : 0
    return <Container>
      {this.props.error ? <ErrorIcon left={left} bottom={bottom + bottomOffset} /> : null}
      {this.state.focussed ? <FocusIcon left={left} bottom={bottom - bottomOffset} /> : null}
      {React.cloneElement(
        this.props.children,
        {
          ref: this.decoratedRef,
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this)
        }
      )}
    </Container>
  }
}

Decorator.propTypes = {
  children: PropTypes.object.isRequired,
  left: PropTypes.number,
  bottom: PropTypes.number
}

Decorator.defaultProps = {
  bottom: 0,
  left: 0
}

export default Decorator
