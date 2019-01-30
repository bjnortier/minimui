import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Pad = styled.span`
  padding-left: ${({ padLeft }) => padLeft ? 4 : 0}px;
`

export default (props) => <Pad padLeft={props.padLeft}>
  <FontAwesomeIcon icon={faCircleNotch} spin />
</Pad>
