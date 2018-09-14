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
import Checkbox from '../../src/Checkbox'
import Verified from '../../src/Verified'

import StyledTable from './StyledTable'

const handleClick = (event) => {
  console.log(event)
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
      <td>{`<Input error value='foo' />`}:</td>
      <td><Input error value='foo' /></td>
    </tr>
    <tr>
      <td>{`<Input disabled value='123' />`}:</td>
      <td><Input disabled value='123' /></td>
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
      <td><Switch /></td>
    </tr>
    <tr>
      <td>{`<Switch on />`}:</td>
      <td><Switch on /></td>
    </tr>
    <tr>
      <td>{`<Switch on error />`}:</td>
      <td><Switch on error /></td>
    </tr>
    <tr>
      <td>{`<Switch inProgress />`}:</td>
      <td><Switch inProgress /></td>
    </tr>
    <tr>
      <td>{`<Switch on inProgress />`}:</td>
      <td><Switch on inProgress /></td>
    </tr>
    <tr>
      <td>{`<Switch disabled />`}:</td>
      <td><Switch disabled /></td>
    </tr>
    <tr>
      <td>{`<Switch on disabled />`}:</td>
      <td><Switch on disabled /></td>
    </tr>
    <tr>
      <td>{`<Checkbox />`}:</td>
      <td><Checkbox label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox onChange={...} />`}:</td>
      <td><Checkbox label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox on />`}:</td>
      <td><Checkbox on label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox on error />`}:</td>
      <td><Checkbox on error label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox inProgress />`}:</td>
      <td><Checkbox inProgress label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox on inProgress />`}:</td>
      <td><Checkbox on inProgress label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox disabled />`}:</td>
      <td><Checkbox disabled label='Option A' /></td>
    </tr>
    <tr>
      <td>{`<Checkbox on disabled />`}:</td>
      <td><Checkbox on disabled label='Option A' /></td>
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
        <Verified />
      </td>
    </tr>
  </tbody></StyledTable>
</StyledDiv>

export default Basics
