import React from 'react'
import { Route, HashRouter, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import styled from 'styled-components'

import { Reset, HSpace } from '../../src'

import Forms from './forms.test'
import States from './states.test'
import Panels from './panels.test'

const StyledNav = styled.div`
  padding: 8px;
`

const Nav = () => <StyledNav>
  <Link to={'/forms'}>Forms</Link>
  <HSpace />
  <Link to={'/states'}>States</Link>
  <HSpace />
  <Link to={'/panels'}>Panels</Link>
</StyledNav>

render(<HashRouter>
  <div>
    <Reset />
    <Nav />
    <Switch>
      <Route exact path='/forms' component={Forms} />
      <Route exact path='/states' component={States} />
      <Route exact path='/panels' component={Panels} />
    </Switch>
  </div>
</HashRouter>, document.getElementById('contents'))
