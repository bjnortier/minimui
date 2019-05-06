import React from 'react'
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import styled, { createGlobalStyle } from 'styled-components'

import { Reset, HSpace } from '../../src'

import Forms from './forms.test'
import States from './states.test'
import Panels from './panels.test'
import Tabs from './tabs.test'

const StyledNav = styled.div`
  padding: 8px;
`

const White = createGlobalStyle`
  body {
    background-color: #f7f7f7;
  }
`

const Nav = () => <StyledNav>
  <Link to={'/forms'}>Forms</Link>
  <HSpace />
  <Link to={'/states'}>States</Link>
  <HSpace />
  <Link to={'/panels'}>Panels</Link>
  <HSpace />
  <Link to={'/tabs/a'}>Tabs</Link>
</StyledNav>

render(<Router>
  <div>
    <Reset />
    <White />
    <Nav />
    <Switch>
      <Route exact path='/forms' component={Forms} />
      <Route exact path='/states' component={States} />
      <Route exact path='/panels' component={Panels} />
      <Route path='/tabs' component={Tabs} />
    </Switch>
  </div>
</Router>, document.getElementById('contents'))
