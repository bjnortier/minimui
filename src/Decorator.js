import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Container1 = styled.div`
  display: inline-block;
  position: relative;
  left: 2px;
  border-bottom: 2px dotted ${({ error }) => error ? 'red' : 'transparent'};
  padding-bottom: 2px;
  margin-bottom: -2px;
  margin-right: 2px;
  margin-left: -2px;
}
`

export const Container2 = styled.div`
  display: inline-block;
  position: relative;
  border-bottom: 2px dotted ${({ error }) => error ? 'red' : 'transparent'};
  padding-bottom: 2px;
  margin-bottom: -3px;
  margin-right: 4px;
  margin-left: -2px;
  left: 3px;
`

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

  componentDidUpdate () {
    if (this.state.focussed) {
      this.domNode.focus()
    }
  }

  render () {
    const { error } = this.props
    return <Container1 error={error} >
      <Container2 error={error} >
        {React.cloneElement(
          this.props.children,
          {
            innerRef: domNode => { this.domNode = domNode },
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this)
          }
        )}
      </Container2>
    </Container1>
  }
}

Decorator.propTypes = {
  children: PropTypes.object.isRequired
}

export default Decorator
