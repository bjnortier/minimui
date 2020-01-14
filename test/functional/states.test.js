import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Input,
  Slider,
  Button,
  Switch,
  Checkbox,
  Select,
  ButtonGroup
} from '../../src'

import StyledTable from './StyledTable'

const IconButton = (props) => <Button secondary {...props} />
const SecondaryButton = (props) => <Button secondary {...props} />
const TransparentButton = (props) => <Button transparent {...props} />
const Switch2 = (props) => <Switch value {...props} />
const Checkbox2 = (props) => <Checkbox value {...props} />

const components = [
  Button,
  SecondaryButton,
  TransparentButton,
  IconButton,
  Input,
  Slider,
  Switch,
  Switch2,
  Checkbox,
  Checkbox2,
  Select,
  ButtonGroup
]
const propsCombinations = [
  {},
  { disabled: true },
  { error: true },
  { disabled: true, error: true },
  { inProgress: true }
]

const defaultProps = {
  Button: { label: 'Click me' },
  IconButton: { label: <span>🔥</span> },
  SecondaryButton: { label: 'Click me', secondary: true },
  TransparentButton: { label: 'Click me', transparent: true },
  Input: { value: 'Foo bar' },
  Slider: { value: 50 },
  Checkbox: { label: 'Some option' },
  Checkbox2: { value: true, label: 'Some option 2' },
  Select: { label: 'Some option', value: 'BBBB' },
  Switch: {},
  Switch2: { value: true },
  ButtonGroup: { value: 4, values: [4, 13, '2'], labels: ['Foo', 'Bar', '🏓'] }
}

const defaultChildren = {
  Select: <><option>AAAA</option><option>BBBB</option><option>CCCC</option></>
}

const renderProps = (props) => (
  <div>
    {Object.keys(props).map(key => (
      <div key={key}>
        {`${key}=${props[key]}`}
      </div>))}
  </div>)

class Wrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: defaultProps[props.Component.name].value
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.setState({ value })
  }

  render () {
    const { Component } = this.props
    return React.createElement(Component, {
      ...defaultProps[Component.name],
      ...this.props,
      value: this.state.value,
      onChange: this.handleChange,
      onClick: () => {}
    }, defaultChildren[Component.name])
  }
}

Wrapper.propTypes = {
  Component: PropTypes.func.isRequired
}

const States = () => (
  <StyledTable>
    <tbody>
      <tr>{propsCombinations.map((props, i) =>
        <th key={i}>{renderProps(props)}</th>)}
      </tr>
      {components.map((Component, i) =>
        <tr key={i}>
          {propsCombinations.map((props, j) =>
            <td key={j}>
              <Wrapper Component={Component} {...props} />
            </td>)}
        </tr>)}
    </tbody>
  </StyledTable>
)

export default States
