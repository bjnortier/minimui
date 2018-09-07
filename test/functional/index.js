import React from 'react'
import { Route, HashRouter, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import { injectGlobal } from 'styled-components'

import reset from '../../src/reset'
import HSpace from '../../src/HSpace'

import Basics from './basics.test'
import Dialogs from './dialogs.test'

const Nav = () => <div>
  <Link to={'/basics'}>Basics</Link>
  <HSpace />
  <Link to={'/dialogs'}>Dialogs</Link>
</div>

const NotFound = (props) => <div>Not found.</div>

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
      <Route exact path='/basics' component={Basics} />
      <Route exact path='/dialogs' component={Dialogs} />
      <Route component={NotFound} />
    </Switch>
  </div>
</HashRouter>, document.getElementById('contents'))
