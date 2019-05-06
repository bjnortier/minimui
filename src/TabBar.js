import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Tabs = styled.div`
  a {
    text-decoration: none;
  }
  a.active {
    background-color: white;
    border: solid 1px #ccc;
    border-bottom: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  a:first-child {
    margin-left: 8px;
  }
`

const Tab = styled(NavLink)`
  display: inline-block;
  margin: 0px 4px;
  padding: 8px 8px;
  position: relative;
  top: 1px;
`

const TabBar = ({ tabs }) => <Tabs>
  {tabs.map(([path, label]) => <Tab key={path} to={path}>{label}</Tab>)}
</Tabs>

TabBar.propTypes = {
  tabs: PropTypes.array.isRequired
}

export default TabBar
