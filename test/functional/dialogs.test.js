import React from 'react'

import Dialog, { Header, Footer } from '../../src/Dialog'

import StyledTable from './StyledTable'

const Dialogs = () => <div>
  <StyledTable><tbody>
    <tr>
      <td>{`<Dialog />`}:</td>
      <td><Dialog>Foo</Dialog></td></tr>
    <tr>
      <td>Header + Contents:</td>
      <td><Dialog><Header>Title</Header><div>Contents</div></Dialog></td>
    </tr>
    <tr>
      <td>Contents + Footer:</td>
      <td><Dialog><div>Contents</div><Footer>Footer</Footer></Dialog></td>
    </tr>
    <tr>
      <td>Header + Contents + Footer:</td>
      <td><Dialog>
        <Header>Title</Header>
        <div>Contents</div>
        <Footer>Footer</Footer>
      </Dialog></td>
    </tr>
  </tbody></StyledTable>
</div>

export default Dialogs
