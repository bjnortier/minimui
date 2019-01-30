import React, { Component } from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import {
  HSpace,
  Input,
  Button,
  Switch,
  Checkbox,
  Select
} from '../../src'

import StyledTable from './StyledTable'

const renderValue = value => {
  switch (typeof value) {
    case 'string':
    case 'number':
      return `${value} [${typeof value}]`
    case 'boolean':
      return `${value ? 'true' : 'false'} [${typeof value}]`
    default:
      return value
  }
}

class Row extends Component {
  render () {
    const { label } = this.props
    const { value } = this.state
    return <tr>
      <td>{label}</td>
      <td>{this.createElement()}</td>
      <td>{renderValue(value)}</td>
    </tr>
  }
}

class OnChangeRow extends Row {
  constructor (props) {
    super(props)
    this.state = {
      value: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.setState({ value })
  }

  createElement () {
    const { Component, componentProps, componentChildren } = this.props
    const { value } = this.state
    return React.createElement(Component, {
      ...componentProps,
      onChange: this.handleChange,
      value: value !== undefined ? value : componentProps.value
    }, componentChildren)
  }
}

class OnClickRow extends Row {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (event) {
    this.setState({ value: this.state.value + 1 })
  }

  createElement () {
    const { Component, componentProps, componentChildren } = this.props
    return React.createElement(Component, {
      ...componentProps,
      onClick: this.handleClick
    }, componentChildren)
  }
}

class VerticalAlignmentTest extends Component {
  constructor (props) {
    super(props)
    this.state = {
      a: false,
      b: false,
      c: '',
      d: 'A'
    }
  }

  render () {
    const { a, b, c, d } = this.state
    return <>
      <Switch
        onChange={(event, value) => this.setState({ a: value })} value={a}
      />
      <HSpace />
      <Checkbox label='Option B'
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
        label={<FontAwesomeIcon icon={faClipboard} />}
        onClick={() => {}}
      />
      <HSpace />
      <Button
        label={<FontAwesomeIcon icon={faTrashAlt} />}
        onClick={() => {}}
      />
    </>
  }
}

export default (props) => <StyledTable>
  <tbody>
    <tr><th>JSX</th><th>Component</th><th>onChange(event, value)</th></tr>
    <OnChangeRow
      label='<Input width={120} />'
      Component={Input}
      componentProps={{ width: 120 }}
      value=''
    />
    <OnChangeRow
      label='<Input placeholder="username" />'
      Component={Input}
      componentProps={{ placeholder: 'username' }}
      value=''
    />
    <OnChangeRow
      label='<Checkbox label="Option A" />'
      Component={Checkbox}
      componentProps={{ label: 'Option A' }}
    />
    <OnChangeRow
      label='<Checkbox label={<FontAwesomeIcon icon={faFilter} />} />'
      Component={Checkbox}
      componentProps={{ label: <FontAwesomeIcon icon={faFilter} /> }}
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
      label='<Button label={<FontAwesomeIcon />} />'
      Component={Button}
      componentProps={{ label: <FontAwesomeIcon icon={faTrashAlt} /> }}
    />
    <tr>
      <td>Vertical alignment</td>
      <td colSpan='2'><VerticalAlignmentTest /></td>
    </tr>
  </tbody>
</StyledTable>
