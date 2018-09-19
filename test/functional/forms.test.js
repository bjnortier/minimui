import React, { Component } from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import {
  HSpace,
  Input,
  TextButton,
  IconButton,
  Switch,
  Checkbox,
  Select,
  Verified
} from '../../src'

import StyledTable from './StyledTable'

const handleClick = (event) => {
  console.log(event)
}

const renderProps = (props) =>
  Object.keys(props).map(key =>
    `${key}={${props[key]}}`
  ).join(' ')

const StyledDiv = styled.div`
  td:nth-child(2) {
    background-color: #f5f5f5;
  }
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
      onChangeValue: props.value,
      propertyValue: props.value
    }
    this.ref = React.createRef()
  }

  handleChange (event, value) {
    this.setState({ onChangeValue: value })
  }

  componentDidUpdate () {
    if (this.ref.current.value !== this.state.propertyValue) {
      this.setState({ propertyValue: this.ref.current.value })
    }
  }

  render () {
    const { Component, props, children } = this.props
    const { onChangeValue, propertyValue } = this.state
    return <tr>
      <td>{`<${Component.name} ${renderProps(props)} />`}:</td>
      <td>{React.createElement(Component, {
        ...props,
        ref: this.ref,
        onChange: this.handleChange.bind(this),
        value: onChangeValue
      }, children)}</td>
      <td>{renderValue(onChangeValue)}</td>
      <td>{renderValue(propertyValue)}</td>
    </tr>
  }
}

export default (props) => <StyledDiv>
  <StyledTable><tbody>
    <tr><th>JSX</th><th>Component</th><th>onChange(event, value)</th><th>ref.value</th></tr>
    <Row
      Component={Input}
      props={{ width: 120 }}
    />
    <Row
      Component={Input}
      props={{ placeholder: 'username' }}
    />
    <Row
      Component={Checkbox}
      props={{ label: 'Option A' }}
    />
    <Row
      Component={Checkbox}
      props={{ label: <FontAwesomeIcon icon={faFilter} />, value: true }}
    />
    <Row
      Component={Switch}
      props={{}}
    />
    <Row
      Component={Switch}
      props={{ value: true }}
    />
    <Row
      Component={Select}
      props={{ value: true }}
      children={<React.Fragment>
        <option>Cape Town</option>
        <option>Toronto</option>
        <option>London</option>
      </React.Fragment>}
    />
    <tr>
      <td>{`<TextButton label='Click me' />`}:</td>
      <td><TextButton label='Click me' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton  />`}:</td>
      <td><IconButton icon={faTrashAlt} onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton transparent icon={faTrashAlt} />`}:</td>
      <td><IconButton transparent icon={faTrashAlt} onClick={handleClick} /></td>
    </tr>

    <tr>
      <td>{`<Verified pass /> <Verified />`}</td>
      <td><Verified pass /><HSpace /><Verified /></td>
    </tr>
    <tr>
      <td>Row of components</td>
      <td>
        <TextButton label='Row' onClick={handleClick} />
        <HSpace />
        <Switch />
        <HSpace />
        <Checkbox label='Option B' />
        <HSpace />
        <Input />
        <HSpace />
        <Select><option>A</option></Select>
        <HSpace />
        <Verified />
        <HSpace />
        <IconButton icon={faClipboard} onClick={handleClick} />
        <HSpace />
        <IconButton icon={faTrashAlt} onClick={handleClick} />
      </td>
    </tr>
  </tbody></StyledTable>
</StyledDiv>
