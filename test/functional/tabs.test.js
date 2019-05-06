import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'

import { TabBar } from '../../src'

const Home = () => <h2>Home</h2>
const Users = () => <h2>Users</h2>
const Account = () => <h2>Account</h2>

const Contents = styled.div`
  background-color: white;
  padding: 8px;
  border-top: solid 1px #ccc;
`

export default () => <div>
  <TabBar tabs={[
    ['/tabs/a', 'Home'],
    ['/tabs/b', 'Users'],
    ['/tabs/c', 'Account']
  ]} />
  <Contents>
    <Switch>
      <Route exact path='/tabs/a' component={Home} />
      <Route exact path='/tabs/b' component={Users} />
      <Route exact path='/tabs/c' component={Account} />
    </Switch>
  </Contents>
</div>
