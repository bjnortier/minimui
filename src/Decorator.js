import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const squiggle = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADEAYAAADkZHKFAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYJpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHLS0JBFIc/tSjKsLBFiyAJa5XRA6Q2QUpUICFm0GujNx+Bj8u9SkjboK1QELXptai/oLZB6yAoiiBatGpd1Kbkdq4GRuQZzpxvfjPnMHMGrOGUktbrBiCdyWmhSZ9rfmHR1fBME13YcdIWUXR1PBgMUNM+7rCY8cZj1qp97l9rXonpClgahccUVcsJTwkH1nKqydvC7UoysiJ8KtynyQWFb009WuEXkxMV/jJZC4f8YG0VdiV+cfQXK0ktLSwvx51O5ZWf+5gvsccyc7MSu8U70QkxiQ8X00zgx8sgozJ78TBEv6yokT9Qzp8hK7mKzCoFNFZJkCRHn6h5qR6TGBc9JiNFwez/377q8eGhSnW7D+qfDOOtBxq2oFQ0jM9Dwygdge0RLjLV/OwBjLyLXqxq7n1wbMDZZVWL7sD5JnQ8qBEtUpZs4tZ4HF5PoGUBnNfQtFTp2c8+x/cQXpevuoLdPeiV847lbzMjZ87VKxyuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVQImWP4/5+BgYHh/38YzYAGGHFJwBWgC6BrAAD49w/zp0rtkQAAAABJRU5ErkJggg==`

export const Container1 = styled.div`
  display: inline-block;
  position: relative;
  padding-bottom: 4px;
  background: ${({ error }) => error ? `url(${squiggle})` : 'none'};
  background-repeat: repeat-x;
  background-position: bottom;
}
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
      {React.cloneElement(
        this.props.children,
        {
          innerRef: domNode => { this.domNode = domNode },
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this)
        }
      )}
    </Container1>
  }
}

Decorator.propTypes = {
  children: PropTypes.object.isRequired
}

export default Decorator
