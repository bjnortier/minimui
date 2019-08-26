import React, { Component } from 'react'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { ThemeProvider } from 'styled-components'

import {
  Input,
  Slider,
  Button,
  Switch,
  Checkbox,
  Select
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
  Select
]
const propsCombinations = [
  {},
  { disabled: true },
  { error: true },
  { disabled: true, error: true },
  { inProgress: true }
]

const defaultProps = {
  'Button': { label: 'Click me' },
  'IconButton': { label: <FontAwesomeIcon icon={faTrashAlt} /> },
  'SecondaryButton': { label: 'Click me', secondary: true },
  'TransparentButton': { label: 'Click me', transparent: true },
  'Input': { value: 'Foo bar' },
  'Slider': { value: 50 },
  'Checkbox': { label: 'Some option' },
  'Checkbox2': { value: true, label: 'Some option 2' },
  'Select': { label: 'Some option', value: 'BBBB' },
  'Switch': {},
  'Switch2': { value: true }
}

const defaultChildren = {
  'Select': <><option>AAAA</option><option>BBBB</option><option>CCCC</option></>
}

const renderProps = (props) => <div>
  {Object.keys(props).map(key => <div key={key}>
    {`${key}=${props[key]}`}
  </div>)}
</div>

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

const ThemeSwitch = styled.div`
  > div {
    margin: 4px;
  }
  > div:first-child {
    margin-left: 8px;
  }
`

export default class States extends Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: {}
    }
  }

  render () {
    const { theme } = this.state
    return <ThemeProvider theme={theme}>
      <div>
        <ThemeSwitch>
          <Button onClick={() => this.setState({ theme: {} })} label='Default' />
          <Button onClick={() => this.setState({ theme: {
            primary: {
              text: 'white',
              disabled: '#619e77',
              background: 'green',
              outline: '#93ddcd'
            },
            borderColor: '#eee'
          } })} label='Green' />
        </ThemeSwitch>
        <StyledTable>
          <tbody>
            <tr>{propsCombinations.map((props, i) => <th key={i}>{renderProps(props)}</th>)}</tr>
            {components.map((Component, i) => <tr key={i}>
              {propsCombinations.map((props, j) => <td key={j}>
                <Wrapper Component={Component} {...props} />
              </td>)}
            </tr>)}
          </tbody>
        </StyledTable>
      </div>
    </ThemeProvider>
  }
}
