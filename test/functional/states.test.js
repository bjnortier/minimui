import React from 'react'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

import {
  Input,
  TextButton,
  IconButton,
  Switch,
  Checkbox,
  Select
} from '../../src'

import StyledTable from './StyledTable'

const handleClick = (event) => {
  console.log(event)
}

const handleChange = (event) => {
  console.log(event)
}

const StyledDiv = styled.div`
  td, th {
    background-color: #f5f5f5;
  }
`

const Switch2 = (props) => <Switch value {...props} />

const components = [Input, TextButton, IconButton, Switch, Switch2, Checkbox, Select]
const propsCombinations = [
  {},
  { disabled: true },
  { error: true },
  { disabled: true, error: true },
  { inProgress: true }
]

const defaultProps = {
  'Input': { value: 'Foo bar', onChange: () => {} },
  'TextButton': { label: 'Click me', onClick: handleClick },
  'IconButton': { icon: faTrashAlt, onClick: handleClick },
  'TransparentIconButton': { icon: faTrashAlt, onClick: handleClick },
  'Checkbox': { label: 'Some option', onChange: handleChange },
  'Select': { label: 'Some option', onChange: handleChange, value: 'BBBB' },
  'Switch': { onChange: handleChange },
  'Switch2': { onChange: handleChange }
}

const defaultChildren = {
  'Select': <React.Fragment><option>AAAA</option><option>BBBB</option><option>CCCC</option></React.Fragment>
}

const renderProps = (props) => <div>
  {Object.keys(props).map(key => <div key={key}>
    {`${key}=${props[key]}`}
  </div>)}
</div>

export default (props) => <StyledDiv>
  <StyledTable><tbody>
    <tr><th>Component</th>{propsCombinations.map((props, i) => <th key={i}>{renderProps(props)}</th>)}</tr>
    {components.map((Component, i) => <tr key={i}>
      <td>{`<${Component.name} />`}</td>
      {propsCombinations.map((props, j) => <td key={j}>
        {React.createElement(Component, { ...defaultProps[Component.name], ...props }, defaultChildren[Component.name])}
      </td>)}
    </tr>)}
  </tbody></StyledTable>
</StyledDiv>
