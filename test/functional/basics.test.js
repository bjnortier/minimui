import React from 'react'
import { faClipboard, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
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
      <td>{`<TextButton label='In progress' inProgress />`}:</td>
      <td><TextButton label='In progress' inProgress onClick={handleClick} /></td>
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
      <td>{`<IconButton icon={faTrashAlt} inProgress />`}:</td>
      <td><IconButton icon={faTrashAlt} inProgress onClick={handleClick} /></td>
    </tr>
    <tr>
      <td>{`<IconButton icon={faSyncAlt} inProgress />`}:</td>
      <td><IconButton icon={faSyncAlt} inProgress onClick={handleClick} /></td>
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
      <td>{`<Select />`}</td>
      <td><Select onChange={(event, value) => console.log(event, value)}>
        <option>Cape Town</option>
        <option>Toronto</option>
        <option>London</option>
      </Select></td>
    </tr>
    <tr>
      <td>{`<Select error value='Toronto' />`}</td>
      <td><Select
        error
        onChange={(event, value) => console.log(event, value)}
        value='Toronto'
      >
        <option>Cape Town</option>
        <option>Toronto</option>
        <option>London</option>
      </Select></td>
    </tr>
    <tr>
      <td>{`<Select inProgress />`}</td>
      <td><Select inProgress onChange={(event, value) => console.log(event, value)}>
        <option>Cape Town</option>
        <option>Toronto</option>
        <option>London</option>
      </Select></td>
    </tr>
    <tr>
      <td>{`<Select disabled value='Toronto'/>`}</td>
      <td><Select disabled value='Toronto'><option>Cape Town</option><option>Toronto</option><option>London</option></Select></td>
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
      </td>
    </tr>
  </tbody></StyledTable>
</StyledDiv>

export default Basics
