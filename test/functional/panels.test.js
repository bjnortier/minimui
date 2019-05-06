import React from 'react'

import { Button, Panel, VSpace } from '../../src'

import StyledTable from './StyledTable'

export default () => <div>
  <StyledTable><tbody>
    <tr>
      <td><Panel>
        <h3>TITLE</h3>
        <VSpace />
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      </Panel></td>
    </tr>
    <tr>
      <td><Panel>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <VSpace /><VSpace />
        <Button label='Click me' onClick={() => {}} />
      </Panel></td>
    </tr>
  </tbody></StyledTable>
</div>
