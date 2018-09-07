import React from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import HSpace from '../../src/HSpace'
import Input from '../../src/Input'
import TextButton from '../../src/TextButton'
import IconButton from '../../src/IconButton'
import RefreshButton from '../../src/RefreshButton'
import Switch from '../../src/Switch'
import Verified from '../../src/Verified'

import StyledTable from './StyledTable'

const handleClick = (event) => {
  console.log(event)
}

const handleSwitchOnChange = (event, on) => {
  console.log('switch:', on)
}

const StyledDiv = styled.div`
  td:nth-child(2) {
    background-color: #f5f5f5;
  }
`

const Basics = (props) => <StyledDiv>
  <StyledTable><tbody>
    <tr>
      <td>{`<Input />`}:</td>
      <td><Input /></td>
    </tr>
    <tr>
      <td>{`<Input width={120} />`}:</td>
      <td><Input width={120} /></td>
    </tr>
    <tr>
      <td>{`<Input width={120} value='hello' />`}:</td>
      <td><Input width={120} value='hello' /></td>
    </tr>
    <tr>
      <td>{`<Input placeholder='username' />`}:</td>
      <td><Input placeholder='username' /></td>
    </tr>
    <tr>
      <td>{`<Input error />`}:</td>
      <td><Input error /></td>
    </tr>
    <tr>
      <td>{`<TextButton label='Click me' />`}:</td>
      <td><TextButton label='Click me' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<TextButton label='In progress' ellipsis />`}:</td>
      <td><TextButton label='In progress' ellipsis onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<TextButton label='Error' error />`}:</td>
      <td><TextButton label='Error' error onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<TextButton label='Disabled' disabled />`}:</td>
      <td><TextButton label='Disabled' disabled onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faTrashAlt} />`}:</td>
      <td><IconButton icon={faTrashAlt} onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faTrashAlt} disabled />`}:</td>
      <td><IconButton icon={faTrashAlt} disabled onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faTrashAlt} spinning />`}:</td>
      <td><IconButton icon={faTrashAlt} spinning onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faSyncAlt} spinning />`}:</td>
      <td><IconButton icon={faSyncAlt} spinning onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faSyncAlt} error />`}:</td>
      <td><IconButton icon={faSyncAlt} error onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton> x2`}:</td>
      <td>
        <IconButton icon={faClipboard} onClick={handleClick} />
        <HSpace />
        <IconButton icon={faTrashAlt} onClick={handleClick} />
      </td>
    </tr>
    <tr>
      <td>{`<RefreshButton readyState='initial' />`}:</td>
      <td><RefreshButton readyState='initial' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<RefreshButton readyState='in-progress' />`}:</td>
      <td><RefreshButton readyState='in-progress' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<RefreshButton readyState='error' />`}:</td>
      <td><RefreshButton readyState='error' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<RefreshButton readyState='done' />`}:</td>
      <td><RefreshButton readyState='done' onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<Switch />`}:</td>
      <td><Switch /></td>
    </tr>
    <tr>
      <td>{`<Switch onChange={...} />`}:</td>
      <td><Switch onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch on />`}:</td>
      <td><Switch on onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch on error />`}:</td>
      <td><Switch on error onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch inProgress />`}:</td>
      <td><Switch inProgress onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch on inProgress />`}:</td>
      <td><Switch on inProgress onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch disabled />`}:</td>
      <td><Switch disabled onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<Switch on disabled />`}:</td>
      <td><Switch on disabled onChange={handleSwitchOnChange} /></td>
    </tr>
    <tr>
      <td>{`<TextButton /><Switch /><Input >`}:</td>
      <td>
        <TextButton label='Row' onClick={handleClick} />
        <HSpace />
        <Switch onChange={handleSwitchOnChange} />
        <HSpace />
        <Input />
      </td>
    </tr>
    <tr>
      <td>{`<Verified pass />`}</td>
      <td><Verified pass /></td>
    </tr>
    <tr>
      <td>{`<Verified />`}</td>
      <td><Verified /></td>
    </tr>
  </tbody></StyledTable>
</StyledDiv>

export default Basics
