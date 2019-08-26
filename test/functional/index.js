import React from 'react'
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import styled from 'styled-components'

import { Reset, HSpace } from '../../src'

import Forms from './forms.test'
import States from './states.test'

const StyledNav = styled.div`
  padding: 8px;
`

const Nav = () => <StyledNav>
  <Link to={'/forms'}>Forms</Link>
  <HSpace />
  <Link to={'/states'}>States</Link>
</StyledNav>

render(<Router>
  <div>
    <Reset />
    <Nav />
    <Switch>
      <Route exact path='/forms' component={Forms} />
      <Route exact path='/states' component={States} />
    </Switch>
  </div>
</Router>, document.getElementById('contents'))
