import React from 'react'
import { Route, HashRouter, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import reset from '../../src/reset'
import HSpace from '../../src/HSpace'

import Forms from './forms.test'
import States from './states.test'
import Dialogs from './dialogs.test'

const Nav = () => <div>
  <Link to={'/forms'}>Forms</Link>
  <HSpace />
  <Link to={'/states'}>States</Link>
  <HSpace />
  <Link to={'/dialogs'}>Dialogs</Link>
</div>

injectGlobal`
  body {
    padding: 10px;
    background-color: black;
  }
`
reset()
render(<HashRouter>
  <div>
    <Nav />
    <Switch>
      <Route exact path='/forms' component={Forms} />
      <Route exact path='/states' component={States} />
      <Route exact path='/dialogs' component={Dialogs} />
    </Switch>
  </div>
</HashRouter>, document.getElementById('contents'))
