import React from 'react'
import styled from 'styled-components'

import { Button } from '../../src'

import StyledTable from './StyledTable'

const Panel = styled.div`
  display: inline-block;
  background-color: #fff;
  padding: 20px;
  border: solid 1px #e8e8e8;
  border-radius: 4px;
  box-shadow: #b7b7b72b 0px 2px 11px 6px;
`

const Footer = styled.div`
  position: relative;
  margin-left: -20px;
  margin-right: -20px;
  margin-bottom: -20px;
  margin-top: 20px;
  padding: 20px;
  border-top: solid 1px #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: #d0ecff;
`

const Dialogs = () => <div>
  <StyledTable><tbody>
    <tr>
      <td><Panel>
        <h3>TITLE</h3>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
      </Panel></td>
    </tr>
    <tr>
      <td><Panel>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
        <Footer><Button label='Click me' onClick={() => {}} /></Footer>
      </Panel></td>
    </tr>
  </tbody></StyledTable>
</div>

export default Dialogs
