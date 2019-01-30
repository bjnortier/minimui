import React, { Component } from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { injectGlobal } from 'styled-components'

import {
  HSpace,
  Input,
  Button,
  Switch,
  Checkbox,
  Select
} from '../../src'

import StyledTable from './StyledTable'

const handleClick = (event) => {
  console.log(event)
}

const StyledDiv = styled.div`
`

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
  constructor (props) {
    super(props)
    this.state = {
      onChangeValue: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, value) {
    this.setState({ onChangeValue: value })
  }

  render () {
    const { label, Component, componentProps, componentChildren } = this.props
    const { onChangeValue } = this.state
    const element = React.createElement(Component, {
      ...componentProps,
      onChange: this.handleChange,
      value: onChangeValue !== undefined ? onChangeValue : componentProps.value
    }, componentChildren)
    return <tr>
      <td>{label}</td>
      <td>{element}</td>
      <td>{renderValue(onChangeValue)}</td>
    </tr>
  }
}

injectGlobal`
  body {
    padding: 10px;
    background-color: red;
  }
`
export default (props) => <StyledDiv>
  <StyledTable><tbody>
    <tr><th>JSX</th><th>Component</th><th>onChange(event, value)</th></tr>
    <Row
      label='<Input width={120} />'
      Component={Input}
      componentProps={{ width: 120 }}
      value=''
    />
    <Row
      label='<Input placeholder="username" />'
      Component={Input}
      componentProps={{ placeholder: 'username' }}
      value=''
    />
    <Row
      label='<Checkbox label="Option A" />'
      Component={Checkbox}
      componentProps={{ label: 'Option A' }}
    />
    <Row
      label='<Checkbox label={<FontAwesomeIcon icon={faFilter} />} />'
      Component={Checkbox}
      componentProps={{ label: <FontAwesomeIcon icon={faFilter} /> }}
    />
    <Row
      label='<Switch />'
      Component={Switch}
      componentProps={{}}
    />
    <Row
      label='<Switch value={true} />'
      Component={Switch}
      componentProps={{ value: true }}
    />
    <Row
      label='<Select />'
      Component={Select}
      componentProps={{ value: 'London' }}
      componentChildren={[
        <option key={0}>Cape Town</option>,
        <option key={1}>Toronto</option>,
        <option key={2}>London</option>
      ]}
    />
    <tr>
      <td>{`<Button label='Click me' />`}:</td>
      <td colSpan='3' ><Button label='Click me' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<Button label={<FontAwesomeIcon icon={faTrashAlt} />} />`}:</td>
      <td colSpan='3' ><Button label={<FontAwesomeIcon icon={faTrashAlt} />} onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>Row of components</td>
      <td colSpan='3'>
        <Button label='Row' onClick={handleClick} />
        <HSpace />
        <Switch onChange={() => {}} />
        <HSpace />
        <Checkbox label='Option B' onChange={() => {}} />
        <HSpace />
        <Input value='' onChange={() => {}} />
        <HSpace />
        <Select onChange={() => {}} value='A'><option>A</option></Select>
        <HSpace />
        <Button label={<FontAwesomeIcon icon={faClipboard} />} onClick={handleClick} />
        <HSpace />
        <Button label={<FontAwesomeIcon icon={faTrashAlt} />} onClick={handleClick} />
      </td>
    </tr>
  </tbody></StyledTable>
</StyledDiv>
