import React, { Component } from 'react'
import { Route, HashRouter as Router, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

import { Reset, HSpace, Button } from '../../src'

import Forms from './forms.test'
import States from './states.test'

const StyledNav = styled.div`
  padding: 8px;
`

const Reset2 = createGlobalStyle`
  html {
    background-color: #efefef;
    font-family: 'Barlow', sans-serif;
  }
`

const ThemeSwitch = styled.div`
  > div {
    margin: 4px;
  }
  > div:first-child {
    margin-left: 8px;
  }
`

const Nav = () => (
  <StyledNav>
    <Link to='/forms'>Forms</Link>
    <HSpace />
    <Link to='/states'>States</Link>
  </StyledNav>
)

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      theme: {}
    }
  }

  render () {
    const { theme } = this.state
    return (
      <Router>
        <div>
          <Reset />
          <Reset2 />
          <ThemeProvider theme={theme}>
            <div>
              <ThemeSwitch>
                <Button onClick={() => this.setState({ theme: {} })} label='Default' />
                <Button
                  onClick={() => this.setState({
                    theme: {
                      primary: {
                        text: '#f0ff23',
                        disabled: '#619e77',
                        background: 'green',
                        outline: '#3eaf56'
                      }
                    }
                  })} label='Green'
                />
              </ThemeSwitch>
              <Nav />
              <Switch>
                <Route exact path='/forms' component={Forms} />
                <Route exact path='/states' component={States} />
              </Switch>
            </div>
          </ThemeProvider>
        </div>
      </Router>
    )
  }
}

render(<Index />, document.getElementById('contents'))
