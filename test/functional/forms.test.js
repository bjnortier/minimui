import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import {
  HSpace,
  Input,
  Slider,
  Button,
  Switch,
  Checkbox,
  Select
} from '../../src'

import StyledTable from './StyledTable'
import { OnChangeRow, OnClickRow } from './formsComponents.test'

const X = styled.div`
  display: inline-block;
  background-color: white;
  border-radius: 4px;
  padding: 4px 8px;
`

class VerticalAlignmentTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: false,
      b: false,
      c: '',
      d: 'A',
      e: 50
    }
  }

  render () {
    const { a, b, c, d, e } = this.state
    return (
      <X>
        <Switch
          onChange={(event, value) => this.setState({ a: value })} value={a}
        />
        <HSpace />
        <Checkbox
          label='Option B'
          onChange={(event, value) => this.setState({ b: value })} value={b}
        />
        <HSpace />
        <Input
          onChange={(event, value) => this.setState({ c: value })} value={c}
        />
        <HSpace />
        <Select
          onChange={(event, value) => this.setState({ d: value })} value={d}
        >
          <option>A</option>
          <option>B</option>
        </Select>
        <HSpace />
        <Button
          label='Click me'
          onClick={() => {}}
        />
        <HSpace />
        <Button
          label={<span>↻</span>}
          onClick={() => {}}
        />
        <HSpace />
        <Slider
          onChange={(event, value) => this.setState({ e: value })} value={e}
        />
      </X>
    )
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

export default class Forms extends Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: {}
    }
  }

  render () {
    const { theme } = this.state
    return (
      <ThemeProvider theme={theme}>
        <div>
          <ThemeSwitch>
            <Button onClick={() => this.setState({ theme: {} })} label='Default' />
            <Button
              onClick={() => this.setState({
                theme: {
                  primary: {
                    text: 'white',
                    disabled: '#619e77',
                    background: 'green',
                    outline: '#93ddcd'
                  }
                }
              })} label='Green'
            />
          </ThemeSwitch>
          <StyledTable>
            <tbody>
              <tr><th>JSX</th><th>Component</th><th>onChange(event, value)</th></tr>
              <OnChangeRow
                label='<Input width={120} />'
                Component={Input}
                componentProps={{ width: 120 }}
                value=''
              />
              <OnChangeRow
                label='<Input placeholder="username" autoComplete="username" />'
                Component={Input}
                componentProps={{ placeholder: 'username', autoComplete: 'username' }}
                value=''
              />
              <OnChangeRow
                label='<Slider />'
                Component={Slider}
                componentProps={{ width: 120, min: 10, max: 20 }}
                value={0}
              />
              <OnChangeRow
                label='<Checkbox label="Option A" />'
                Component={Checkbox}
                componentProps={{ label: 'Option A' }}
              />
              <OnChangeRow
                label='<Checkbox label={<span>🔥</span>} />'
                Component={Checkbox}
                componentProps={{ label: <span>🔥</span> }}
              />
              <OnChangeRow
                label='<Checkbox />'
                Component={Checkbox}
                componentProps={{ }}
              />
              <OnChangeRow
                label='<Switch />'
                Component={Switch}
                componentProps={{}}
              />
              <OnChangeRow
                label='<Switch value={true} />'
                Component={Switch}
                componentProps={{ value: true }}
              />
              <OnChangeRow
                label='<Select />'
                Component={Select}
                componentProps={{ value: 'London' }}
                componentChildren={[
                  <option key={0}>Cape Town</option>,
                  <option key={1}>Toronto</option>,
                  <option key={2}>London</option>
                ]}
              />
              <OnClickRow
                label='<Button label="Click me" />'
                Component={Button}
                componentProps={{ label: 'Click me!' }}
              />
              <OnClickRow
                label='<Button secondary label="Click me" />'
                Component={Button}
                componentProps={{ secondary: true, label: 'Click me!' }}
              />
              <OnClickRow
                label='<Button transparent label="Click me" />'
                Component={Button}
                componentProps={{ transparent: true, label: 'Click me!' }}
              />
              <OnClickRow
                label='<Button label={<span>↻</span>} />'
                Component={Button}
                componentProps={{ label: <span>↻</span> }}
              />
              <tr>
                <td>Vertical alignment</td>
                <td colSpan='2'><VerticalAlignmentTest /></td>
              </tr>
            </tbody>
          </StyledTable>
        </div>
      </ThemeProvider>
    )
  }
}
