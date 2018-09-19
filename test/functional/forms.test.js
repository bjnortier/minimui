import React from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faSyncAlt, faFilter } from '@fortawesome/free-solid-svg-icons'
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

const StyledDiv = styled.div`
  td:nth-child(2) {
    background-color: #f5f5f5;
  }
`

export default (props) => <StyledDiv>
  <StyledTable><tbody>
    <tr>
      <td>{`<Input width={120} />`}:</td>
      <td><Input width={120} /></td>
    </tr>
    <tr>
      <td>{`<Input placeholder='username' />`}:</td>
      <td><Input placeholder='username' /></td>
    </tr>
    <tr>
      <td>{`<TextButton label='Click me' />`}:</td>
      <td><TextButton label='Click me' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faTrashAlt} />`}:</td>
      <td><IconButton icon={faTrashAlt} onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton transparent icon={faTrashAlt} />`}:</td>
      <td><IconButton transparent icon={faTrashAlt} onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<Switch />`}:</td>
      <td><Switch /></td>
    </tr>
    <tr>
      <td>{`<Switch on />`}:</td>
      <td><Switch on /></td>
    </tr>
    <tr>
      <td>{`<Checkbox />`}:</td>
      <td><Checkbox label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox on label={<FontAwesomeIcon icon={faFilter} />} />`}:</td>
      <td><Checkbox on label={<FontAwesomeIcon icon={faFilter} />} /></td>
    </tr>
    <tr>
      <td>{`<Select />`}</td>
      <td><Select onChange={(event, value) => console.log(event, value)}>
        <option>Cape Town</option>
        <option>Toronto</option>
        <option>London</option>
      </Select></td>
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
