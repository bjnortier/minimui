import React, { Component } from 'react'

import {
  HSpace,
  Input,
  Slider,
  Button,
  Switch,
  Checkbox,
  Select,
  ButtonGroup
} from '../../src'

import StyledTable from './StyledTable'
import { OnChangeRow, OnClickRow } from './formsComponents.test'

class VerticalAlignmentTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: false,
      b: false,
      c: '',
      d: 'A',
      e: 50,
      f: 4
    }
  }

  render () {
    const { a, b, c, d, e, f } = this.state
    return (
      <>
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
        <Slider
          onChange={(event, value) => this.setState({ e: value })} value={e}
        />
        <HSpace />
        <ButtonGroup
          value={f}
          values={[4, 13]}
          labels={['Foo', '🏓']}
          onChange={(event, value) => this.setState({ f: value })}
        />
      </>
    )
  }
}

const ButtonGroupTest = (props) => {
  return (
    <ButtonGroup
      {...props}
      values={[4, 13, '2']}
      labels={['Foo', 'Bar', '🏓']}
    />
  )
}

const Forms = () => (
  <StyledTable>
    <tbody>
      <tr><th>JSX</th><th>Component</th><th>onChange(event, value)</th></tr>
      <OnChangeRow
        label='<Input width={200} />'
        Component={Input}
        componentProps={{ width: 200, id: 'input-1' }}
        value=''
      />
      <OnChangeRow
        label='<Input placeholder="username" />'
        Component={Input}
        componentProps={{ placeholder: 'username' }}
        value=''
      />
      <OnChangeRow
        label='<Slider />'
        Component={Slider}
        componentProps={{ width: 120, min: 10, max: 20, id: 'slider-1' }}
        value={0}
      />
      <OnChangeRow
        label='<Checkbox label="Option A" />'
        Component={Checkbox}
        componentProps={{ label: 'Option A', id: 'checkbox-1' }}
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
        componentProps={{ id: 'switch-1', label: 'Enabled' }}
      />
      <OnChangeRow
        label='<Switch value={true} />'
        Component={Switch}
        componentProps={{ value: true, label: 'Airplane mode' }}
      />
      <OnChangeRow
        label='<Select />'
        Component={Select}
        componentProps={{ value: 'London', id: 'Cities' }}
        componentChildren={[
          <option key={0}>Cape Town</option>,
          <option key={1}>Toronto</option>,
          <option key={2}>London</option>
        ]}
      />
      <OnChangeRow
        label='<ButtonGroup />'
        Component={ButtonGroupTest}
        componentProps={{ value: 4 }}
      />
      <OnClickRow
        label='<Button label="Click me" />'
        Component={Button}
        componentProps={{ label: 'Click me!', id: 'button-1' }}
      />
      <OnClickRow
        label='<Button secondary label="Click me" />'
        Component={Button}
        componentProps={{ secondary: true, label: 'Click me!' }}
      />
      <OnClickRow
        label='<Button transparent label="Click me" />'
        Component={Button}
        componentProps={{ transparent: true, label: 'Click me!', id: 'button-3' }}
      />
      <tr>
        <td>Vertical alignment</td>
        <td colSpan='2'><VerticalAlignmentTest /></td>
      </tr>
    </tbody>
  </StyledTable>
)

export default Forms
